var a = {
    type: 'literal'
};
console.log(a);
var NotAnAction = (function () {
    function NotAnAction() {
        this.type = 'Constructor function (class)';
    }
    return NotAnAction;
})();
a = new NotAnAction(); // valid TypeScript!
console.log(a);
