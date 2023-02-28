//Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

function pigIt(str) {
    return str.replace(/[a-zA-Z]+/gm, x => (x+x[0]).substr(1)+"ay")

    // return str.split(" ").map(x =>
    //     x[0].includes("!" | "0")
    //         ? x
    //         : x.replace(x, x + x[0] + "ay").substr(1)).join(" ")
}

console.log(pigIt('Pig latin is ! -  cool')) //'igPay atinlay siay oolcay')