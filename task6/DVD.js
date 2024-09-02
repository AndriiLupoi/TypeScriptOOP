"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        console.log("DVD: '".concat(this.title, "' borrowed"));
        this.borrowed = true;
    };
    DVD.prototype.getDetails = function () {
        return "DVD: ".concat(this.title, ", Author: ").concat(this.author, ", Duration: ").concat(this.duration, " minutes, Borrowed: ").concat(this.borrowed);
    };
    return DVD;
}());
exports.DVD = DVD;
