/*
var five = 5;
var threeAlso = three; // error
console.log('five:' + five, 'threeAlso:' + threeAlso);

function scope1() {
  var three = 3;
  var fiveAlso = five; // =5
  var sevenAlso = seven; // error
  console.log('three:' + three, 'fiveAlso:' + fiveAlso, 'sevenAlso:' + sevenAlso);
}

function scope2() {
  var seven = 7;
  var fiveAlso = five; // =5
  var threeAlso = three; // error
  console.log('seven:' + seven, 'fiveSlso:' + five, 'threeAlso:' + threeAlso);
}

scope1();
scope2();
*/

/*
 * result: 5 5 5 5 5
 */
for(var x=0; x<5; x++) {
  setTimeout(() => console.log(x), 0);
}

/*
 * result: 1 2 3 4 5
 */
(function(){
  for(let y=0; y<5; y++) {
    setTimeout(() => console.log(y), 0);
  }
})()
