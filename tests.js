// const yes = (()=> console.log('yes'))().setTime

// let arr = ["One", "Two", "Three"]
// const num_arr = [1, 2, 3, 4];

// let num_arr_reduced = num_arr.reduce(
//     (prev + curr) => prev + curr
// )
// console.log(num_arr_reduced);
// let calc = (a,b) => a+b;
// const sumWithInitial = num_arr.reduce(calc)
// console.log(sumWithInitial)
//===========================================================================
// function Cat(name, color){
//     this.name = name
//     this.color = color
// }
//
// Cat.prototype.voice = function(){
//     console.log(`Cat ${this.name} says meow`)
// }
//
// const cat = new Cat('Mister', 'Black')
//
// cat.voice();
// console.log(cat)



//========================================================================
//proto prototype
//
// function Pepega (name){
//     this.name=name;
// }
// Pepega.prototype.hello = () => console.log(this.name);
//
// const hello_pepega = new Pepega('Cris');
// hello_pepega.hello();
// console.log(hello_pepega.__proto__.__proto__)

// console.log(({}).prototype === ({}).__proto__ )
// //false
// // prototype есть только у не стрелочных ф-ций и классов(а классы это синтаксический саха над функциями)
// function ITK() {}
// console.log((ITK.prototype === ITK.__proto__))
// false
// __proto__ - это просто ссылка на то_как_было_создано.prototype
// тоесть в задаче по факту ITK.prototype === Function.prototype; А два прототипа не равны
// ITK.prorotype создается через New Function и имеет его в прототипах
// ITK.__proto__ ссылается на прототип того класса с помощью которого ITK была создана
// тоесть ITK.__proto__ равно Function.prototype

// function a(){}
// function b(){}
// console.log(a.prototype === b.prototype)

// false
// у каждого класса,у каждой функции свой персональный прототип.
// это два независимых обьекта и они равны не будут
// let c = (props) => {return `<div>prototype...</div>`}
// console.log('c.prototype is: '+c.prototype +' and '+Boolean(c.prototype)+' but Object.prototype is:'+ Boolean(Object.prototype));
// console.log(c.__proto__ === Object.prototype);
// стрелочная функция не содержит прототипа, но

// class GGG {}
// console.log(GGG.__proto__ === Function.prototype)
//
// let man = 'man';
// console.log(man.__proto__ === String.prototype)
//
// const ggg_small = new GGG()
// console.log(ggg_small.__proto__ === GGG.prototype)

//========================================================================
// // cloisure
// function createIncrementor(n){
//     return function(num){
//         console.log(`n:  ${n}; num: ${num}`)
//         console.log(`n + num = ${n + num}`)
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// console.log(addOne(1))

//========================================================================
// class A {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//
//     get sumAndMultiply(){
//         return 'сумма: ' + this.sum()+ '. Итоге множения:' + this.calcMultiply()
//     }
//
//     sum(){
//         return this.a + this.b;
//     }
//
//     calcMultiply(){
//         return this.a * this.b;
//     }
// }
//
// const kkk = new A(1, 2);
//
// // console.log(typeof kkk); // const with class = object
// // console.log(typeof A); // class = function
// // console.log(typeof kkk.sumAndMultiply); // string пуша там строка и конкатенация
//
// console.log(kkk.sumAndMultiply);


// const uWu = { kawaii: 'desu'}
// const oWo = { neko: '(๑ↀᆺↀ๑)'}
//
// const uoWuWouo = Object.assign(uWu, oWo)
//
// console.log(uWu)
// console.log(oWo)
// console.log(uoWuWouo)

// const language = {
//     set current(name) {
//         this.log.push(name);
//     },
//     log: [],
//     get showLog() {
//         return console.log(this.log)
//     }
// };
//
// language.current = 'EN';
// language.current = 'FA';
//
// // console.log(language.log);
// language.showLog


function hasNoneLetters(phrase, blacklist) {
    return !phrase.toLowerCase().split("").find(w => blacklist.toLowerCase().split("").includes(w));

}

console.log(hasNoneLetters("Mate Academy","pqrs"))
console.log(hasNoneLetters("Mate Academy","aaaa"))