function summOfDigits(n) {
    let x;
    if (n < 10) {
        return n
    } else {
        x = String(n)
            .split("")
            .map(Number)
            .reduce((x, y) => x + y)
        if (x > 9) {
            return summOfDigits(x)
        }
        return x;
    }
    //     return (n - 1) % 9 + 1;  // hard mathematical decision
}

console.log(summOfDigits(16)) // -->  1 + 6 = 7
console.log(summOfDigits(942)) // -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(summOfDigits(132189)) // -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(summOfDigits(493193)) // -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2