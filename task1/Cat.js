"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age !== null && age !== void 0 ? age : 0; // Якщо age не передано, присвоюємо значення за замовчуванням, наприклад, 0
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " walks"));
    };
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says moew"));
    };
    return Cat;
}());
exports.Cat = Cat;
