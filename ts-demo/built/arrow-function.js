var Toppings = /** @class */ (function () {
    function Toppings(toppings) {
        this.toppings = Array.isArray(toppings) ? toppings : [];
    }
    Toppings.prototype.outputList = function () {
        var _this = this;
        //  this.toppings.forEach(function(topping, i) {
        //    console.log(topping, i + '/' + this.toppings.length); // no this
        //  })
        this.toppings
            .forEach(function (topping, i) { return console.log(topping, i + '/' + _this.toppings.length); }); // `this` works
    };
    return Toppings;
}());
var ctrl = new Toppings(['cheese', 'letture']);
ctrl.outputList();
//# sourceMappingURL=arrow-function.js.map