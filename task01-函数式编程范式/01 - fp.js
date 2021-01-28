// ---------------------------------
// 什么是函数式编程

// 非函数式
// let num1 = 2
// let num2 = 3
// let sum = num1 + num2
// console.log(sum)

// 函数式
// function add(n1, n2) {
//   return n1 + n2
// }
// let sum = add(2, 3)
// console.log(sum)


// ---------------------------------
// 函数是一等公民

// 把函数赋值给变量
// let fn = function() {
//   console.log('Hello First-class Function')
// }
// fn()

// 一个示例
// const BlogController = {
//   index(posts) { return Views.index(posts) },
//   show(post) { return Views.show(post) },
//   create(attrs) { return Db.create(attrs) },
//   update(post, attrs) { return Db.update(post, attrs) },
//   destroy(post) { return Db.destroy(post) }
// }
// // 优化
// const BlogController = {
//   index: Views.index,
//   show: Views.show,
//   create: Db.create,
//   update: Db.update,
//   destroy: Db.destroy
// }


// ---------------------------------
// 高阶函数——函数作为参数

// forEach
// function forEach(array, fn) {
//   for(let i = 0; i < array.length; i++) {
//     fn(array[i])
//   }
// }

// 测试
// let arr1 = [1, 3, 4 , 7, 8]
// forEach(arr1, function(item) {
//   console.log(item)
// })

// filter
// function filter(array, fn) {
//   let results = []
//   for (let i = 0; i < array.length; i++) {
//     if (fn(array[i])) {
//       results.push(array[i])
//     }
//   }
//   return results
// }

// 测试
// let arr2 = [1, 3, 4, 7, 8]
// let r = filter(arr2, function(item) {
//   return item % 2 === 0
// })
// console.log(r)


// ---------------------------------
// 高阶函数——函数作为返回值

// function makeFn() {
//   let msg = 'Hello function'
//   return function() {
//     console.log(msg)
//   }
// }

// const fn = makeFn()
// fn()

// makeFn()()

// once
// function once(fn) {
//   let done = false
//   return function() {
//     if (!done) {
//       done = true
//       return fn.apply(this, arguments)
//     } 
//   }
// }

// let pay = once(function(money) {
//   console.log(`支付：${money} RMB`)
// })

// 只会执行一次
// pay(5)
// pay(5)
// pay(5)
// pay(5)
// pay(5)


// ---------------------------------
// 使用高阶函数的意义

// 面向过程的方式
// let array = [1, 2, 3, 4]
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// 使用高阶韩式
// let array = [1, 2, 3, 4]
// forEach(array, item => {
//   console.log(item)
// })

// let r = filter(array2, item => {
//   return item % 2 === 0
// })


// ---------------------------------
// 常用的高阶函数：map every some

// map
// const map = (array, fn) => {
//   let results = []
//   for (let value of array) {
//     results.push(fn(value))
//   }
//   return results
// }

// 测试
// let arr = [1, 2, 3, 4]
// arr = map(arr, v => v * v)
// console.log(arr)


// every
// const every = (array, fn) => {
//   let result = true
//   for (let value of array) {
//     result = fn(value)
//     if (!result) {
//       break
//     }
//   }
//   return result
// }

// 测试
// let arr = [9, 12, 14]
// let r = every(arr, v => v > 10)
// console.log(r)

// some
// const some = (array, fn) => {
//   let result = false
//   for (let value of array) {
//     result = fn(value)
//     if (result) {
//       break
//     }
//   }
//   return result
// }

// 测试
// let arr = [1, 3, 4, 9]
// let r = some(arr, v => v % 2 === 0)
// console.log(r)


// ---------------------------------
// 纯函数和不纯的函数
// slice / splice

// let array = [1, 2, 3, 4 ,5]

// 纯函数
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))

// 不纯的函数
// console.log(array.splice(0, 3)) 
// console.log(array.splice(0, 3)) 
// console.log(array.splice(0, 3)) 

// 纯函数
// function getSum(n1, n2, n3) {
//   return n1 + n2 + n3
// }

// console.log(getSum(1, 2))
// console.log(getSum(1, 2))
// console.log(getSum(1, 2))


// ---------------------------------
// Lodash
// 纯函数的好处
// const _ = require('lodash') 
// function getArea(r) { 
// 	return Math.PI * r * r 
// } 
// let getAreaWithMemory = _.memoize(getArea) console.log(getAreaWithMemory(4)) 

// // 自己模拟一个 memoize 函数
// function memoize(f) {
//   let cache = {}
//   return function() {
//     let arg_str = JSON.stringify(arguments)
//     cache[arg_str] = cache[arg_str] || f.apply(f, arguments) 
//     return cache[arg_str] 
//   }
// }


// ---------------------------------
// 柯里化演示
// 普通的纯函数
// function checkAge(min, age) {
//   return age >= min
// }
// console.log(checkAge(18, 20))
// console.log(checkAge(18, 24))
// console.log(checkAge(22, 24))

// 函数的柯里化
// function checkAge(min) {
//   return function(age) {
//     return age >= min
//   }
// }
// es6
// let checkAge = min => (age => age >= min)

// let checkAge18 = checkAge(18)
// let checkAge20 = checkAge(20)

// console.log(checkAge18(20))
// console.log(checkAge18(24))
// console.log(checkAge20(20))

// 柯里化
// function curry(fn) {
//   console.log(arguments)
//   var args = Array.prototype.slice.call(arguments, 1)
//   return function() {
//     var innerArgs = Array.prototype.slice.call(arguments)
//     var finalArgs = args.concat(innerArgs)
//     return fn.apply(null, finalArgs)
//   }
// }

// ---------------------------------
// lodash 中的 curry 基本使用
// const _ = require('lodash')

// function getSum(a, b, c) {
//   return a + b + c
// }

// const curried = _.curry(getSum)

// console.log(curried(1, 2, 3))
// console.log(curried(1)(2, 3))
// console.log(curried(1)(2)(3))


// ---------------------------------
// 柯里化案例
// const curried = _.curry(getSum)
// // function match(reg, str) {
// //   return str.match(reg)
// // }
// const match = curried(function(reg, str) {
//   return str.match(reg)
// })

// const haveSpace = match(/\s+/g)
// const haveNumber = match(/\d+/g/)

// console.log(haveSpace('hello world'))
// console.log(haveNumber('abc'))

// const filter = _curry(function(func, array) {
//   return array.filter(func)
// })

// console.log(filter(haveSpace, ['John Conner', 'John_Donne']))
// const findSpace = filter(haveSpace)
// console.log(findSpace, ['John Conner', 'John_Donne'])


// ---------------------------------
// 模拟实现 lodash 中的 curry 方法
// function curry(func) {
//   return function curriedFn(...args) {
//     // 判断实参和形参的个数
//     if(args.length < func.length) {
//       return function() {
//         return curriedFn(args.concat(...Array.from(arguments)))
//       }
//     }
//     return func(...args)
//   }
// }

// function curry(fn) {
//   const args = Array.from(arguments).slice(1)
//   return function() {
//     const innerArgs = Array.from(arguments)
//     const finalArgs = [...args, ...innerArgs]
//     return fn.apply(null, finalArgs)
//     // return fn.call(null, ...finalArgs)
//   }
// }

// var curriedAdd = curry(getSum, 1)
// console.log(curriedAdd(2, 3))

// function bind(fn, thisArg) {
//   var args = Array.prototype.slice.call(arguments, 2)
//   return function() {
//     var innerArgs = Array.prototype.slice.call(arguments)
//     var finalArgs = args.concat(innerArgs)
//     return fn.apply(thisArg, finalArgs)
//   }
// }

// ---------------------------------
// 函数组合演示
// function compose(f, g) {
//   return function(value) {
//     return f(g(value))
//   }
// }

// function reverse(array) {
//   return array.reverse()
// }

// function first(array) {
//   return array[0]
// }

// const last = compose(first, reverse)

// console.log(last([1, 2, 3, 4]))


// ---------------------------------
// 模拟 lodash 中的 flowRight
// const _ = require('lodash')

// const reverse = arr => arr.reverse()
// const first = arr => arr[0]
// const toUpper = s => s.toUpperCase()

// const f = _.flowRight(toUpper, first, reverse)
// console.log(f(['one', 'two', 'three']))

// function compose(...args) {
//   return function(value) {
//     return args.reverse().reduce(function(acc, fn) {
//       return fn(acc)
//     }, value)
//   }
// }

// const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)

// const f = compose(toUpper, first, reverse)
// console.log(f(['one', 'two', 'three']))


// ---------------------------------
// 函数组合要满足结合律
// const _ = require('lodash')

// const f = _.flowRight(_.toUpper, _.first, _.reverse)
// console.log(f(['one', 'two', 'three']))

// let f = compose(f, g, h)
// let associative = compose(compose(f, g), h) == compose(f, compose(g, h))
// // true

// const _ = require('lodash')

// const trace = _.curry((tag, v) => { console.log(tag, v)
//   return v
// })

// const split = _.curry((sep, str) => _.split(str, sep)) 
// const join = _.curry((sep, array) => _.join(array, sep)) 
// const map = _.curry((fn, array) => _.map(array, fn))

// const f = _.flowRight(join('-'), trace('map 之后'), map(_.toLower), trace('split 之后'), split(' '))
// console.log(f('NEVER SAY DIE'))

// ---------------------------------
// lodash 和 lodash/fp 模块中 map 方法的区别

// const _ = require('lodash')

// console.log(_.map(['23', '8', '10'], parseInt))
// // parseInt('23', 0, array)
// // parseInt('8', 1, array)
// // parseInt('10', 2, array)

// const fp = require('lodash/fp')

// console.log(fp.map(parseInt, ['23', '8', '10']))


// // MayBe 函子
// class MayBe {
//   static of (value) {
//     return new MayBe(value)
//   }

//   constructor(value) {
//     this._value = value
//   }

//   map(fn) {
//     return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
//   }

//   isNothing() {
//     return this._value === null || this._value === undefined
//   }
// }

// let r1 = MayBe.of('Hello World')
//           .map(x => x.toUpperCase())
// console.log(r1) // MayBe { _value: 'HELLO WORLD' }

// let r2 = MayBe.of(null)
//           .map(x => x.toUpperCase())
// console.log(r2) // MayBe { _value: null }

// let r3 = MayBe.of('hello world')
//           .map(x => x.toUpperCase())
//           .map(x => null)
//           .map(x => x.split(''))
// console.log(r3) // MayBe { _value: null }


// // Either 函子
// class Left {
//   static of(value) {
//     return new Left(value)
//   }

//   constructor(value) {
//     this._value = value
//   }

//   map(fn) {
//     return this
//   } 
// }

// class Right {
//   static of(value) {
//     return new Right(value)
//   }

//   constructor(value) {
//     this._value = value
//   }

//   map(fn) {
//     return Right.of(fn(this._value))
//   } 
// }

// let r1 = Right.of(12).map(x => x + 2)
// let r2 = Left.of(12).map(x => x + 2)
// console.log(r1) // Right { _value: 14 }
// console.log(r2) // Left { _value: 12 }

// function parseJSON(str) {
//   try {
//     return Right.of(JSON.parse(str))
//   } catch(e) {
//     return Left.of({ error: e.message })
//   }
// }

// let r3 = parseJSON('{ name: zs }')
// console.log(r3) // Left { _value: { error: 'Unexpected token n in JSON at position 2' } }

// let r4 = parseJSON('{ "name": "zs" }')
//             .map(x => x.name.toUpperCase())
// console.log(r4) // Right { _value: 'ZS' }

// const fp = require('lodash/fp')

// class IO {
//   static of(x) {
//     return new IO(function() {
//       return x
//     })
//   }

//   constructor(fn) {
//     this._value = fn
//   }

//   map(fn) {
//     // 把当前的 value 和传入的 fn 组合成一个新的函数
//     return new IO(fp.flowRight(fn, this._value))
//   }
// }
 
// // 调用
// let r = IO.of(process).map(p => p.execPath)
// console.log(r) // IO { _value: [Function] }
// console.log(r._value())

// const { compose, curry } = require('folktale/core/lambda')
// const { toUpper, first } = require('lodash/fp')

// let f1 = curry(2, (x, y) => {
//   return x + y
// })

// console.log(f1(1, 2))
// console.log(f1(1)(2))

// let f2 = compose(toUpper, first)
// console.log(f2(['one', 'two']))

// Task 处理异步任务
// const fs = require('fs')
// const { task } = require('folktale/concurrency/task')
// const { split, find } = require('lodash/fp')

// function readFile(filename) {
//   return task(resolver => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//       if (err) resolver.reject(err)

//       resolver.resolve(data)
//     })
//   })
// }

// readFile('../package.json')
//   .map(split('\n'))
//   .map(find(x => x.includes('version')))
//   .run()
//   .listen({
//     onRejected: err => {
//       console.log(err)
//     },
//     onResolved: value => {
//       console.log(value) 
//     }
//   })

const fs = require('fs')
const fp = require('lodash/fp')

class IO {
  static of(x) {
    return new IO(function() {
      return x
    })
  }

  constructor(fn) {
    this._value = fn
  }

  map(fn) {
    // 把当前的 value 和传入的 fn 组合成一个新的函数
    return new IO(fp.flowRight(fn, this._value))
  }

  join() {
    return this._value()
  }

  flatMap(fn) {
    return this.map(fn).join()
  }
}
 
const readFile = function(filename) {
  return new IO(function() {
    return fs.readFileSync(filename, 'utf-8')
  })
}

const print = function(x) {
  return new IO(function() {
    console.log(111, x) // IO { _value: [Function] }
	  return x
  })
}

// // IO(IO(x))
// let cat = fp.flowRight(print, readFile)
// // 调用
// let r = cat('../package.json')._value()._value()
// console.log(r)

let r = readFile('../package.json')
          .map(fp.toUpper)
          .flatMap(print)
          .join()
console.log(r)
