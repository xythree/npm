const readline = require("readline")

const str = require("../loading.json")

function Loading(obj) { 
    let index = obj.random ? Math.floor(Math.random() * str.length) : (obj.index || 0)
    
    this.str = obj.str || str[index]
    this.status = true  
    this.stream = process.stdout        
    this.i = 0
    this.len = this.str.length      
    this.beforeText = obj.beforeText || ""
    this.afterText = obj.afterText || ""
    
    this.loop = function () {
        setTimeout(() => {
            if (this.status) {
                readline.clearLine(this.stream, 0)  
                this.stream.write(this.beforeText + this.str.charAt(this.i) + this.afterText)       
                readline.cursorTo(this.stream, 0)   
                this.i = ++this.i> this.len ? 0 : this.i
                this.start()                    
            }
        }, 60)  
    }
}

Loading.prototype.start = function () {
    this.status = true
    this.loop()
}

Loading.prototype.clear = function () {
    readline.clearLine(this.stream, 0)
    readline.cursorTo(this.stream, 0)
}

Loading.prototype.stop = function () {
    this.status = false     
    this.clear()
}

exports.Loading = Loading
