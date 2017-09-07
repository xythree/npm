### Description
_ _ _
> A simple Node.js module for colorizing console output.

### Install
_ _ _

```js
	npm install console_color
```

### Usage
_ _ _
```js
    require("console_color")
    
    console.log("hello world".black)
    console.log("hello world".red)
    console.log("hello world".green)
    console.log("hello world".yellow)
    console.log("hello world".blue)
    console.log("hello world".purple)
    console.log("hello world".white)
    console.log("hello world".lightblue)
```

or background colors
```js
    console.log("hello world".bg.black)
    console.log("hello world".bg.red)
    console.log("hello world".bg.green)
    console.log("hello world".bg.yellow)
    console.log("hello world".bg.blue)
    console.log("hello world".bg.white)
    console.log("hello world".bg.purple)
    console.log("hello world".bg.lightblue)
```

or background colors with font colors
```js
	console.log("hello world".bg.yellow.black)
	console.log("hello world".bg.red.blue)
	
	console.log("hello world".red.bg.blue)
	....
```