"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " swims"));
    };
    return Fish;
}());
exports.Fish = Fish;
