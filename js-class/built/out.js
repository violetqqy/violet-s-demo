"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polygon = /** @class */ (function () {
    function Polygon(height, width) {
        this.height = height;
        this.width = width;
    }
    return Polygon;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        return _super.call(this, sideLength, sideLength) || this;
    }
    Object.defineProperty(Square.prototype, "area", {
        get: function () {
            return this.height * this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "sideLength", {
        set: function (newLength) {
            this.height = newLength;
            this.width = newLength;
        },
        enumerable: true,
        configurable: true
    });
    return Square;
}(Polygon));
var square = new Square(2);
//# sourceMappingURL=out.js.map