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

request({
	url: "http://dict.youdao.com/w/eng/" + encodeURI(word.join(" "))
},(err, res, body) => {
	
	let $ = cheerio.load(body)
	
	lg.stop()
	
	let str = $("#phrsListTab .trans-container ul").text() || "查询不出结果"
	
	console.log(str.green)
	
	console.log($("#phrsListTab .trans-container .additional").text().replace(/\s/g,"").yellow)
	
})
