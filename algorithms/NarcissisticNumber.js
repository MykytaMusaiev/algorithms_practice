function narcissistic(value) {
    let arr = Array.from(String(value), Number)

    return value === arr.reduce((acc, curr) => acc + curr ** arr.length);
}

console.log(narcissistic(153))
console.log(narcissistic(1555))