class Person {
  type = 'human'
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(this.name + ' говорит привет!')
  }
}

class Programmer extends Person {
  constructor(name, job) {
    super(name) //ссылка на оригинальный конструктор класса
    this._job = job
  }
  get job() {
    return this._job.toUpperCase()
  }
  set job(job) {
    if (job.length < 2) {
      console.log('Validation failed')
    } else {
      this._job = job
    }
  }
  greet() {
    super.greet() // вызов оригинального метода класса и его дополнение ниже
    console.log(`${this.name} worked as ${this._job}`)
  }
}

const fronted = new Programmer('Max', 'Frontend')
fronted.job = 'Backend Developer'
fronted.greet()
// console.log(fronted.job)
// console.log(fronted)
// console.log(fronted.job)

// // Static
// class Util {
//   static average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length
//   }
// }
//
// const res = Util.average(1, 1, 2, 3, 5, 8, 13)
// console.log(res)

// const util = new Util()
//
// console.log(util.average(1, 1, 2, 3, 5, 8, 13))
