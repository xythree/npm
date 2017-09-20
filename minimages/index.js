#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const imagemin = require("imagemin")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminGifsicle = require("imagemin-gifsicle")
const imageminPngquant = require("imagemin-pngquant")
const loading = require("loading_status")

let lg = new loading({  
    random: true,
    beforeText: "loading... ",
    afterText: " "
})

require("console_color")

let use = [imageminPngquant, imageminJpegtran, imageminGifsicle]
let _extname = [".png", ".jpg", ".gif"]
let filePath = path.resolve()
let arg = process.argv.slice(2).map(t => "." + t)
let extname = _extname.filter((t, i) => {
    return arg.indexOf(t) != -1
})
let list = []

extname = extname.length ? extname : _extname

function getFile(dir, build) {    
    let files = fs.readdirSync(dir)
    
    files.forEach((filename, i) => {
        let src = path.join(dir, filename)
        
        let stats = fs.statSync(src)        
        if (stats.isFile() && extname.indexOf(path.extname(filename)) != -1) {          
            list.push({src, dir: build})
        } else if (stats.isDirectory() && filename != "build") {                    
            getFile(src, path.join(build,filename))
        }
        
    })
}

lg.start()

getFile(path.resolve(), "build")

let i = list.length

function promise(t) {
    let ext = path.extname(t.src)
    let _use = use[_extname.indexOf(ext)]

    imagemin([t.src], t.dir, {use: [_use()]}).then(() => {
        console.log("success:".yellow, t.src.replace(filePath,"").green)
        if (i) {
            promise(list[--i])
        } else {
            lg.stop()
        }
    })
}

i && promise(list[0])












