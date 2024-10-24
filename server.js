import fs from 'node:fs/promises'
import express from 'express'
import mongoose from 'mongoose'
import apiRouter from './server/apiRouter.js'
import authRouter from './server/authRouter.js'
import "dotenv/config"
import adminRouter from './server/adminRouter.js'
import bestRouter from './server/bestRouter.js'
import cookieParser from 'cookie-parser'
import apiProtectedRouter from './server/apiProtectedRouter.js'

// Constants
const isProduction = process.env.MODE === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.static('files'))
app.use(express.static('pigs'))
app.use('/admin', express.static('files'))

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
  
}

app.use("/auth", authRouter)
app.use("/api", apiRouter)
app.use("/api", apiProtectedRouter)
app.use("/admin", adminRouter)
app.use("/best", bestRouter)


// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')
    
    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    // const rendered = await render(url, ssrManifest)
    const rendered = await render(req);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

mongoose.connect('mongodb://127.0.0.1:27017/gypsy').then((res) => console.log("Db connected")).catch(err => console.log(err))

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
