"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(courseName, durationInHours) {
        this.students = [];
        this.courseName = courseName;
        this.durationInHours = durationInHours;
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log("".concat(student, " is already registered in ").concat(this.courseName));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.includes(student);
    };
    return OnlineCourse;
}());
exports.OnlineCourse = OnlineCourse;
