"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.borrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.borrow = function () {
        console.log("Book: '".concat(this.title, "' borrowed"));
        this.borrowed = true;
    };
    Book.prototype.getDetails = function () {
        return "Book: ".concat(this.title, ", Author: ").concat(this.author, ", Pages: ").concat(this.pages, ", Borrowed: ").concat(this.borrowed);
    };
    return Book;
}());
exports.Book = Book;
