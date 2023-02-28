function zeroToEnd (x){
    // let y=[];
    // y.push(...x.filter((x)=> x !== 0))
    // y.push(...x.filter((x)=> x === 0))
    // return y

    return x.filter( x=> x !== 0).concat(x.filter(x=> x===0))

}

console.log(zeroToEnd([1,2,0,1,0,1,0,3,0,1])) //  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]