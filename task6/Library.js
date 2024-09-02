"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Library.prototype.findItemByName = function (name) {
        return this.items.find(function (item) { return item.title === name; });
    };
    Library.prototype.listAvailableItems = function () {
        this.items.forEach(function (item) {
            console.log(item.getDetails());
        });
    };
    return Library;
}());
exports.Library = Library;
