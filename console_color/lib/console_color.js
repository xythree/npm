module.exports = () => {

    const colors = {
        Reset: "\x1b[0m",
        Bright: "\x1b[1m",
        Dim: "\x1b[2m",
        Underscore: "\x1b[4m",
        Blink: "\x1b[5m",
        Reverse: "\x1b[7m",
        Hidden: "\x1b[8m",
        fg: {
            Black: "\x1b[30m",
            Red: "\x1b[31m",
            Green: "\x1b[32m",
            Yellow: "\x1b[33m",
            Blue: "\x1b[34m",
            Purple: "\x1b[35m", //紫色
            LightBlue: "\x1b[36m", //淡蓝色
            White: "\x1b[37m",
            Crimson: "\x1b[38m"
        },
        bg: {
            Black: "\x1b[40m",
            Red: "\x1b[41m",
            Green: "\x1b[42m",
            Yellow: "\x1b[43m",
            Blue: "\x1b[44m",
            Purple: "\x1b[45m",
            LightBlue: "\x1b[46m",
            White: "\x1b[47m",
            Crimson: "\x1b[48m"
        }
    }

    const addProperty = function(color, func) {
        String.prototype.__defineGetter__(color, func)
    }

    for (let i in colors.fg) {

        addProperty(i.toLocaleLowerCase(), function() {
            return colors.fg[i] + this + colors.Reset
        })

    }

    addProperty("bg", function() {
        let tmp = {}

        for (let i in colors.bg) {
            tmp[i.toLocaleLowerCase()] = colors.bg[i] + this + colors.Reset
        }

        return tmp
    })

}