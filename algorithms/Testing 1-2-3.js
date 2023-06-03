// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number=function(array){

    return (!array.length) ? [] : array.map((elem, index) => `${index+1}: ${elem}`)
}

//const numRes = number([]); // working
const numRes = number(["a", "b", "c"]); // working
console.log(numRes)