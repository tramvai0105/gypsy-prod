import fs from "fs"
import path from "path";

fs.readdirSync(path.resolve()).forEach((f, i) => {
    if(f == "rename.js"){
        return
    }
    console.log(i)
    fs.rename(f, `id${i}.jpg`, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });
  });