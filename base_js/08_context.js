// const person = {
//   surname: 'Старк',
//   knows: function (what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//   }
// }
//
// const john = { surname: 'Snew'}
//
// person.knows.call(john, ...['ничего не', 'Gign']) /// es6, распаковка массива
// person.knows.apply(john, ['ничего не', 'Gign'])
// const bound = person.knows.bind(john, 'ничего не', 'Gign')
// bound()

// ================================

// function f() {
//   console.log(this);
// }
//
// let wrapped = f.bind('abc');
//
// f();         // [object Window]
// wrapped();   // abc

// ================================

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }
//
// console.log(new Food('cheese', 5).name);
// expected output: "cheese"

//
// const john = { surname: 'Сноу' }
//
// person.knows('все', 'Бран')
// person.knows.call(john, 'ничего не', 'Джон')
// person.knows.apply(john, ['ничего не', 'Джон'])
// person.knows.call(john, ...['ничего не', 'Джон'])
// const bound = person.knows.bind(john, 'ничего не', 'Джон')
// bound()

// ========

// function Person(name, age) {
//   this.name = name
//   this.age = age
//
//   console.log(this)
// }
//
// const elena = new Person('Elena', 20)

// ======== Явный
function logThis() {
  console.log(this)
}

const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()
//
// // ===== Неявный
const animal = {
  legs: 4,
  logThis: function() {
    console.log(this)
  }
}

animal.logThis()

// function Cat(color) {
//   this.color = color
//   console.log('This', this)
//   ;( () => console.log('Arrow this', this) )()
// }
//
// new Cat('red')
