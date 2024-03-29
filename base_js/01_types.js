// null, undefined, boolean, number, bigInt, string, symbol, object

console.log(+[]) //0
console.log(+{}) //NaN
console.log(Boolean([])) //true
console.log(Boolean({})) // false

console.log(Boolean(false)) // false
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null) //false


// console.log(typeof(' '));
// console.log(typeof(true));
// console.log(typeof(5));
// console.log(typeof(5n));
// console.log(typeof(undefined));
// console.log(typeof(Symbol('id')));
// console.log(typeof([]))
// console.log(typeof(null));
// let n;
// let x = 10;
// x=null;
// console.log(x);

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", '', ``
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof NaN)

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }

// '', 0, null, undefined, NaN, false
// console.log(Boolean(''))
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function(){}))

// Строки и числа
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0)
// console.log('' - 1 + 0)
// console.log('3' * '8') // number
// console.log(4 + 10 + 'px')
// console.log('px' + 5 + 10) // string
// console.log('42' - 40)
// console.log('42px' - 2)
// console.log(null + 2)
// console.log(undefined + 42)

// == vs ===
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)
// console.log('0' == false)
// console.log('0' == 0)
// console.log(0 == 0)

// =====
console.log(false == '')
console.log(false == [])
console.log(false == {})
console.log('' == 0)
console.log('' == [])
console.log('' == {})
console.log(0 == [])
console.log(0 == {})
console.log(0 == null)

