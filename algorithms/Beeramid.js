// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// 1. your referral bonus, and
// 2. the price of a beer can
// For example:
//     beeramid(1500, 2); // should === 12
//     beeramid(5000, 3); // should === 16

function beeramid(bonus, price) {
    let levels = 0;
    let localCashCounter = bonus;

    while (localCashCounter >= 0) {
        levels++;
        localCashCounter -= price * (levels ** 2)
    }
    return (levels-1) >=0 ? levels-1 : 0;
}
console.log(beeramid(-1, 4)); // should 16
// console.log(beeramid(14, 1)); // should 3
// console.log(beeramid(10, 1)); // should 3
// console.log(beeramid(10, 3)); // should 3
// console.log(beeramid(20, 1)); // should 3
// console.log(beeramid(1, 2)); // should 0
// console.log(beeramid(1500, 2)); // should 12
// console.log(beeramid(5000, 3)); // should 16
