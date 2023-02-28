const countBits = (n) => n.toString(2).split("0").join("").length

function binaryCounter(num) {
    let x = 0
    num.toString(2).split("").map(n => { n==1 ? x++ : n})
    return x;
}

console.log(binaryCounter(22332))

let bitCounter = countBits(223322)
console.log(bitCounter);