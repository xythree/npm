
### Install
_ _ _

```js
    npm install loading_status
```

### Usage
_ _ _
```js
    const loading = require("loading_status")

    let lg = new loading({  
        random: true,
        beforeText: "loading... ",
        afterText: "!"
    })
    
    lg.start()
    
    lg.stop()
    
```

or 
```js
    let lg = new loading({  
        index: 0, // [0, 24]
        beforeText: "loading... ",
        afterText: "!"
    })
    
	...
	
```

or 
```js
    let lg = new loading({  
        str: "←↖↑↗→↘↓↙", //input spinners
        beforeText: "loading... ",
        afterText: "!"
    })
    
	...
	
```