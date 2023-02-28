function cakes(recipe, available) {

    if (Object.keys(recipe).length > Object.keys(available).length) {
        return 0
    }
    let finalResult=[];
    for(let [key, value] of Object.entries(recipe)){
        if(available[key]/value){
            finalResult.push(Math.floor(available[key]/value))
        }
    }
    return Math.min(...finalResult)
}


// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));

