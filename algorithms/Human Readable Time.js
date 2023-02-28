function humanReadable(seconds) {
    if (seconds === 0) {
        return "00:00:00"
    }
    if (seconds < 0) {
        return "enter positive value"
    }

    let hh = (Math.floor(seconds / 3600) < 10) ? "0" + (Math.floor(seconds / 3600)) : Math.floor(seconds / 3600)
    let mm = (seconds - hh*60*60 < 600) ? "0"+Math.floor((seconds % 3600) / 60) : Math.floor((seconds-hh*3600) / 60)
    let ss = (seconds - mm * 60 - hh * 60 * 60 < 10) ? "0" + (seconds - mm * 60 - hh * 60 * 60) : (seconds - mm * 60 - hh * 60 * 60)

    return `${hh}:${mm}:${ss}`
}

console.log(humanReadable(45296))
console.log(humanReadable(3761))
console.log(humanReadable(609))
console.log(humanReadable(0))
console.log(humanReadable(-1))