class Toppings {
  toppings;

  constructor(toppings) {
    this.toppings = Array.isArray(toppings) ? toppings : [];
  }

  outputList(){
  //  this.toppings.forEach(function(topping, i) {
  //    console.log(topping, i + '/' + this.toppings.length); // no this
  //  })
    this.toppings
      .forEach((topping, i) => console.log(topping, i + '/' + this.toppings.length)) // `this` works
  }
}

var ctrl = new Toppings(['cheese','letture']);

ctrl.outputList();

