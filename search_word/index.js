#!/usr/bin/env node

const loading = require("loading_status")
const request = require("request")
const cheerio = require("cheerio")
require("console_color")

let lg = new loading({  
    random: true,
    beforeText: "loading... ",
    afterText: " "
})


let word = process.argv.slice(2)

lg.start()

word = word.join(" ")

request({
    url: "http://dict.youdao.com/w/" + encodeURI(word)
},(err, res, body) => {
    
    let $ = cheerio.load(body)
    let ydTranslator = false
    
    lg.stop()
    
    let str = ""
    
    if (/\w/g.test(word)) {
        str = $("#phrsListTab .trans-container ul").text()
        
        if (str) {
            console.log(str.green)
            console.log("     " + $("#phrsListTab .trans-container .additional").text().replace(/\s/g,"").yellow)
        } else {
            ydTranslator = true
        }
    } else {
        let wordGroup = $("#phrsListTab .trans-container ul .wordGroup")
        
        if (wordGroup.length) {
            console.log("\n")
            wordGroup.each(function() {
                console.log("     " + $(this).text().replace(/\s/g,"").green)
            })
        } else {
            ydTranslator = true
        }
    }
    
    if (ydTranslator) {
        if ($("#ydTrans .tab-current span").length) {
            console.log("     " + $("#ydTrans .tab-current span").text().yellow)
            $("#fanyiToggle .trans-container p").each(function () {
                console.log("     " + $(this).text().green)
            })
        } else {
            if ($("#ydTrans").length) {
                console.log("     " + $("#webTrans h3 .tabs a span").text().yellow)         
                console.log("     " + $("#tWebTrans .wt-container .title span").text().replace(/^\s+/,"").green)            
            } else if ($("#webTransToggle").length) {
                console.log("     " + $("#webTrans h3 .tabs a span").text().yellow)         
                $("#webPhrase .wordGroup").each(function() {
                    console.log("     " + $(this).text().replace(/^\s+/g,"").green)
                })            
            }
        }
    }
    
})
