'use strict';

var myObject = {
  foo: 'bar',
  someMethod: function() {
   console.log(this);
  } 
 };

function someMethod() {
  console.log(this);
}

myObject.someMethod();
someMethod();
