function Cat (name, color){
    this.name = name
    this.color = color
}

function myNew(constructor, ...args){
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj;
}

const cat = myNew(Cat, 'pushok','black')
console.log(cat)
