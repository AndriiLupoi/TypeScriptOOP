"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        console.log("Magazine: '".concat(this.title, "' borrowed"));
        this.borrowed = true;
    };
    Magazine.prototype.getDetails = function () {
        return "Magazine: ".concat(this.title, ", Author: ").concat(this.author, ", Issue Number: ").concat(this.issueNumber, ", Borrowed: ").concat(this.borrowed);
    };
    return Magazine;
}());
exports.Magazine = Magazine;
