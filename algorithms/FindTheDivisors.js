function divisors(integer) {

    let r = []
    for(let i = 2; i<integer; i++){
        if(integer % i === 0) r.push(i)
    }
    let res = r.length !== 0 ? r : `${integer} is prime`
    return res

};

// console.log(divisors(12)); // should return [2,3,4,6]
// console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"