var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; }
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'pat';
    }
    __decorate([
        Override('test') // invokes Override, which returns the decorator
    ], Test.prototype, "name", void 0);
    return Test;
}());
var t = new Test();
console.log(t.name); // 'test'
/*function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false });
}

class Test {
  @ReadOnly             // notice there are no `()`
  name: string;
}

const t = new Test();
t.name = 'jan';
console.log(t.name); // 'undefined'*/ 
//# sourceMappingURL=property-decorators.js.map