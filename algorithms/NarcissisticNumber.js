function narcissistic(value) {
    let arr = Array.from(String(value), Number)

    let newArr = Array.from(String(value), Number).map( i=> (i ** arr.length))

    return newArr.reduce((i, j) => i + j) === value;
}

console.log(narcissistic(153))
console.log(narcissistic(1555))