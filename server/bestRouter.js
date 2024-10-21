import express from 'express'
const bestRouter = express.Router()
import fs from 'node:fs/promises'
import { resolve } from 'path'

const isProduction = process.env.MODE === 'production'

if (!isProduction)
    bestRouter.get('/', async (req, res) => {
        let html = await fs.readFile(resolve(resolve(), "best", "indexDev.html"), 'utf-8')
        return res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    })
else {
    bestRouter.get('/', async (req, res) => {
        let html = await fs.readFile(resolve(resolve(), "dist", "client", "best", "index.html"), 'utf-8')
        return res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    })
}

export default bestRouter