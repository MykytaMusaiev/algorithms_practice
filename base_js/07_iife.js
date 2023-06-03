// Immediate Invoked Function Expression
// let result = []
// for (var i = 0; i < 5; i++) {
//   result.push( function() {
//     console.log(i)
//   } )
// }
//
// result[2]()
// result[4]()

// for (let i = 0; i < 5; i++) {
//   (function() {
//     let j = i
//     result.push( function() { console.log(j) } )
//   })()
// }
//
// result[2]()
// result[4]()


let result = []

for (var i =0; i<5; i++){
  // result.push(i)
  result.push( function(){
    console.log(i)
  })
}
console.log(result)
result[0]()