"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird(name, age) {
        this.name = name;
        this.age = age !== null && age !== void 0 ? age : 0; // Якщо age не передано, присвоюємо значення за замовчуванням, наприклад, 0
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " flies"));
    };
    Bird.prototype.makeSound = function () {
        console.log("".concat(this.name, " sings"));
    };
    return Bird;
}());
exports.Bird = Bird;
