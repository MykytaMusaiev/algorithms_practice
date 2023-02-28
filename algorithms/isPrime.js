function isPrime(n) {

    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;

    if (n % 2 === 0) return (n === 2);

    let m = Math.sqrt(n);
    for (let i = 3; i <= m; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

// console.log(isPrime(3)) // true
// console.log(isPrime(15)) // false
console.log(isPrime(20)) // true



