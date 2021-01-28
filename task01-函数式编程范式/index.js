/*
  1. Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
  2. Promise 中有三种状态 分别为 成功 fulfilled 失败 rejected 等待 pending
      pending -> fulfilled
      pending -> rejected
      一旦状态确定就不可更改
  3. resolve 和 reject 函数是用来更改状态的
      resolve: fulfilled
      reject: rejected
  4. then 方法内部做的事情就是判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败的回调函数
  5. then 成功回调有一个参数 表示成功之后的值 then 失败回调有一个参数 表示失败之后的原因
*/

const MyPromise = require('./MyPromise')

function p1() {
  return new MyPromise(function(resolve, reject) {
    setTimeout(function() {
      resolve('p1')
    }, 2000)
  })
}

function p2() {
  return new MyPromise(function(resolve, reject) {
    reject('p2 reject')
    // resolve('p2 resolve')
  })
}

p2()
  .then(value => console.log(value))
  .catch(reason => console.log(reason))

// p2().finally(() => {
//   console.log('finally')
//   return p1()
// })
// .then(value => {
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })
// MyPromise.all(['a', 'b', p1(), p2(), 'c']).then((result) => {
//   console.log(result)
// })

// MyPromise.resolve(100).then(value => console.log(value))
// MyPromise.resolve(p1()).then(value => console.log(value))
// MyPromise.resolve(p2()).then(value => console.log(value))

// let promise = new MyPromise((resolve, reject) => {
//   // throw new Error('executor error')
//   // resolve('成功')
//   // reject('失败') 
//   // setTimeout(() => {
//   //   resolve('成功......' )
//   // }, 2000)
//   setTimeout(() => {
//     reject('失败......' )
//   }, 2000)
// })
// promise.then().then().then(value => console.log(value), reason => console.log(reason))
// promise.then(value => {
//   console.log(value)
//   // throw new Error('then error')
//   return 'aaa'
// }, reason => {
//   console.log(reason)
//   return 10000
// }).then(value => {
//   console.log(value)
//   // throw new Error('then error')
// }, reason => { 
//   console.log('aaaaa')
//   console.log(reason.message)
// })
// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve('other')
//   })
// }

// // 循环调用
// let p1 = promise.then(value => {
//   console.log(value)
//   return p1
// })

// p1.then(value => {
//   console.log(value)
// }, reason => {
//   console.log((reason.message))
// })

// promise.then(value => {
//   console.log(value)
//   return other()
// }, reason => {
//   console.log(reason)
// }).then(value => {
//   console.log(value)
// })

// promise.then(value => {
//   console.log(2)
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })

// promise.then(value => {
//   console.log(3)
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })
