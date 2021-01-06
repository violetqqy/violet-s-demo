// ---------------------------------
// 什么是函数式编程

// 非函数式
let num1 = 2
let num2 = 3
// let sum = num1 + num2
// console.log(sum)

// 函数式
function add(n1, n2) {
  return n1 + n2
}
// let sum = add(2, 3)
// console.log(sum)


// ---------------------------------
// 函数是一等公民

// 把函数赋值给变量
let fn = function() {
  console.log('Hello First-class Function')
}
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
function forEach(array, fn) {
  for(let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

// 测试
// let arr1 = [1, 3, 4 , 7, 8]
// forEach(arr1, function(item) {
//   console.log(item)
// })

// filter
function filter(array, fn) {
  let results = []
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      results.push(array[i])
    }
  }
  return results
}

// 测试
// let arr2 = [1, 3, 4, 7, 8]
// let r = filter(arr2, function(item) {
//   return item % 2 === 0
// })
// console.log(r)


// ---------------------------------
// 高阶函数——函数作为返回值

function makeFn() {
  let msg = 'Hello function'
  return function() {
    console.log(msg)
  }
}

// const fn = makeFn()
// fn()

// makeFn()()

// once
function once(fn) {
  let done = false
  return function() {
    if (!done) {
      done = true
      return fn.apply(this, arguments)
    } 
  }
}

let pay = once(function(money) {
  console.log(`支付：${money} RMB`)
})

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
const map = (array, fn) => {
  let results = []
  for (let value of array) {
    results.push(fn(value))
  }
  return results
}

// 测试
// let arr = [1, 2, 3, 4]
// arr = map(arr, v => v * v)
// console.log(arr)


// every
const every = (array, fn) => {
  let result = true
  for (let value of array) {
    result = fn(value)
    if (!result) {
      break
    }
  }
  return result
}

// 测试
// let arr = [9, 12, 14]
// let r = every(arr, v => v > 10)
// console.log(r)

// some
const some = (array, fn) => {
  let result = false
  for (let value of array) {
    result = fn(value)
    if (result) {
      break
    }
  }
  return result
}

// 测试
// let arr = [1, 3, 4, 9]
// let r = some(arr, v => v % 2 === 0)
// console.log(r)




