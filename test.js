// // async function async1() {
// //   console.log('1');
// //   console.log(await async2());
// //   console.log('2');
// // }
// // async function async2() {
// //   console.log('3');
// //   return '0';
// // }

// // setTimeout(function () {
// //   console.log('4');
// //   new Promise(function (resolve) {
// //     console.log('5');
// //     resolve();
// //   }).then(function () {
// //     console.log('6')
// //   })
// // })

// // async1();

// // new Promise(function (resolve) {
// //   console.log('7');
// //   resolve();
// // }).then(function () {
// //   console.log('8');
// // });

// // console.log('9');

// // Promise
// //   .resolve('a')
// //   .then('b')
// //   .then(Promise.resolve('c'))
// //   .then(console.log)

// // Promise.resolve({
// //   then: function () {
// //     console.log('a');
// //   }
// // }).then(() => {
// //   console.log('d');
// // })

// // Promise.resolve({
// //   then: function (fullfill) {
// //     fullfill('a');
// //     console.log('b')
// //     throw new Error('c')
// //     console.log('d');
// //   }
// // }).then(
// //   (d) => {
// //     console.log(d);
// //   },
// //   (err) => {
// //     console.log(err.message);
// //   },
// // );

// // Promise.resolve(3).then(() => {
// //   console.log('a');
// //   throw new Error('b');
// // }).then(() => {
// //   console.log('c');
// // }, (err) => {
// //   console.log(err.message);
// //   return 'd';
// // }).then((d) => console.log('d'), (e) => {
// //   console.log('e')
// // })

// // async function async1() {
// //   console.log('1');
// //   console.log(await async2());
// //   console.log('2');
// // }
// // async function async2() {
// //   console.log('3');
// //   return '0';
// // }
// // setTimeout(function () {
// //   console.log('4');
// //   new Promise(function (resolve) {
// //     console.log('5');
// //     resolve();
// //   }).then(function () {
// //     console.log('6')
// //   })
// // }) 
// // async1();
// // new Promise(function (resolve) {
// //   console.log('7');
// //   resolve();
// // }).then(function () {
// //   console.log('8');
// // });
// // console.log('9');

// // function* gen() {
// //   var a = yield 'a';
// //   var b = yield a + 'b';
// //   return b;
// //   }
// //   var g = gen();

// //   console.log(g.next());
// //   console.log(g.next('c'));
// //   console.log(g.next());

// // function* gen1() {
// //   yield 'a';
// //   yield 'b';
// //   }

// //   function* gen2() {
// //   yield* gen1();
// //   yield 'c';
// //   yield 'd';
// //   }

// //   function* gen3() {
// //   gen1();
// //   yield 'c';
// //   yield 'd';
// //   }

// //   const g2 = gen2();
// //   const g3 = gen3();
// //   for(let v of g2) {
// //   console.log(v);
// //   }
// //   for(let v of g3) {
// // //   console.log(v);
// // //   }

// // async function async1() {
// //   console.log('1');
// //   console.log(await async2());
// //   console.log('2');
// // }
// // async function async2() {
// //   console.log('3');
// //   return '0';
// // }
// // setTimeout(function () {
// //   console.log('4');
// //   new Promise(function (resolve) {
// //     console.log('5');
// //     resolve();
// //   }).then(function () {
// //     console.log('6')
// //   })
// // }) 
// // async1();
// // new Promise(function (resolve) {
// //   console.log('7');
// //   resolve();
// // }).then(function () {
// //   console.log('8');
// // });
// // console.log('9');

// // 1 3 7 9 0 2 8 4 5 6
// // Promise.resolve({
// //   then: function () {
// //     console.log('a');
// //   }
// // }).then(() => {
// //   console.log('d');
// // })
// // Promise.resolve({ 
// //   then: function(fullfill){
// //   fullfill('a');
// //   console.log('b')
// //   throw new Error('c')
// //   console.log('d');
// //   }}).then(
// //   (d) => { console.log(d); },
// //   (err) => { console.log(err.message); },
// //   );

// // new Promise(function (resolve, reject) {
// //     resolve('a');
// //     throw new Error('b');
// //   })
// //   .then(console.log)
// //   .catch(console.log);
// // function* gen() {
// //   var a = yield 'a';
// //   var b = yield a + 'b';
// //   return b;
// // }
// // var g = gen();

// // console.log(g.next());
// // console.log(g.next('c'));
// // console.log(g.next());
// function* gen1() {
//   yield 'a';
//   yield 'b';
//   }

//   function* gen2() {
//   yield* gen1();
//   yield 'c';
//   yield 'd';
//   }

//   function* gen3() {
//   gen1();
//   yield 'c';
//   yield 'd';
//   }

//   const g2 = gen2();
//   const g3 = gen3();
//   for(let v of g2) {
//   console.log(v);
//   }
//   for(let v of g3) {
//   console.log(v);
//   }
//   function geneP(d1,d2){
//     return new Promise(function(resolve, reject){
//     if(+new Date() > 0){
//     resolve(d1);
//     }else{
//     reject(d2);
//     }
//     });
//     }
//     function* gen(){
//     yield geneP('yes','no');
//     yield geneP('y','n');
//     }

//     function run(fn) {
//     var g = fn();
//     function next() {
//     var result = g.next();
//     console.log(result.value);
//     if (result.done) return;
//     result.value.then(next);
//     }
//     next();
//     }

//     run(gen);
function geneP(d1, d2) {
  return new Promise(function (resolve, reject) {
    if (+new Date() > 0) {
      resolve(d1);
    } else {
      reject(d2);
    }
  });
}

function* gen() {
  yield geneP('yes', 'no');
  yield geneP('y', 'n');
}

function run(fn) {
  var g = fn();

  function next() {
    var result = g.next();
    console.log(result.value);
    if (result.done) return;
    result.value.then(next);
  }
  next();
}

run(gen);
