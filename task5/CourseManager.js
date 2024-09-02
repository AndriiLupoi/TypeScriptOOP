"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        this.courses = this.courses.filter(function (course) { return course.courseName !== courseName; });
    };
    CourseManager.prototype.findCourse = function (courseName) {
        return this.courses.find(function (course) { return course.courseName === courseName; });
    };
    CourseManager.prototype.listCourses = function () {
        this.courses.forEach(function (course) {
            console.log("Course: ".concat(course.courseName));
            console.log("Duration: ".concat(course.durationInHours, " hours"));
            console.log("Registered Students: ".concat(course.students.join(', ')));
            console.log('-----------------------');
        });
    };
    return CourseManager;
}());
exports.CourseManager = CourseManager;
