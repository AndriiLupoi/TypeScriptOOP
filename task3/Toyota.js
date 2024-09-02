"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toyota = void 0;
var Car_1 = require("./Car");
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, color, hybrid) {
        var _this = _super.call(this, "Toyota", model, year, color) || this;
        _this.hybrid = hybrid;
        return _this;
    }
    // Реалізація абстрактного методу
    Toyota.prototype.displayDetails = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.getYear(), ", Color: ").concat(this.color, ", Hybrid: ").concat(this.hybrid ? "Yes" : "No"));
    };
    return Toyota;
}(Car_1.Car));
exports.Toyota = Toyota;
