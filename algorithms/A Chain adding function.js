function add(...args){
    console.log(...args)
}


console.log(add(1)(2)); // 3
console.log(add(1)(2)(3)); // 6
console.log(add(1)(2)(3)(4)); //10
console.log(add(1)(2)(3)(4)(5)); // 15