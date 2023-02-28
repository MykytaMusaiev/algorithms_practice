// Каждая буква встречается только один раз

function isIsogramWithSet(str){
    return new Set(str.toLowerCase()).size == str.length
}

function isIsogramm(string) {
    let str1 = string.toLowerCase();
    let str2 = '';

    str2 =  str1.split('').filter(function(item, pos, self) {
           if (self.indexOf(item) !== pos){
               return false
           } else {
               return self
           }
        })
        .join('');

    return str2 === string.toLowerCase()
}
// console.log(isIsogramm('Dermatoglyphics')); //true
// console.log(isIsogramm('Isogram')); //true
// console.log(isIsogramm('')); //true
// console.log(isIsogramm('aba')); //false
// console.log(isIsogramm('moOse')); //false
// console.log(isIsogramm('isIsogram')); //false

console.log(isIsogramWithSet('Dermatoglyphics')); //true
console.log(isIsogramWithSet('Isogram')); //true
console.log(isIsogramWithSet('')); //true
console.log(isIsogramWithSet('aba')); //false
console.log(isIsogramWithSet('moOse')); //false
console.log(isIsogramWithSet('isIsogram')); //false
