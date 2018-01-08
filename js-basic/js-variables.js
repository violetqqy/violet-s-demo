function timecount1() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

function timecount2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

function timecount3() {
  for (var i = 0; i < 3; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    }(i));
  }
}

// timecount1();
// timecount2();
// timecount3();

// console.log(x); // undefined
// var x = 1;
// console.log(x); // 1

// console.log(y); // ReferenceError
// let y = 2;
// console.log(y);

// var x = 1;
// console.log(window.x); // 1

// let y = 2;
// console.log(window.y); // undefined


// var x = 1;
// var x = 2;
// console.log(x); // 2

// let y = 1;
// let y = 2; // SyntaxError

const PI = 3.14159;
console.log(PI); // 3.14159

PI = 3; // TypeError
