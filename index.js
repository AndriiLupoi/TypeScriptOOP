"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./task1/Bird");
var Cat_1 = require("./task1/Cat");
var Fish_1 = require("./task1/Fish");
var Circle_1 = require("./task2/Circle");
var Rectangle_1 = require("./task2/Rectangle");
var Triangle_1 = require("./task2/Triangle");
var BMW_1 = require("./task3/BMW");
var Tesla_1 = require("./task3/Tesla");
var Toyota_1 = require("./task3/Toyota");
var Developer_1 = require("./task4/Developer");
var Manager_1 = require("./task4/Manager");
var CourseManager_1 = require("./task5/CourseManager");
var OnlineCourse_1 = require("./task5/OnlineCourse");
var Book_1 = require("./task6/Book");
var DVD_1 = require("./task6/DVD");
var Library_1 = require("./task6/Library");
var Magazine_1 = require("./task6/Magazine");
function task1() {
    var _a, _b;
    console.log("\n");
    console.log("Task 1 executed--------------------");
    var cat = new Cat_1.Cat("Eliza", 12);
    var bird = new Bird_1.Bird("chirik", 3);
    var fish = new Fish_1.Fish("bul'-bul'");
    (_a = cat.makeSound) === null || _a === void 0 ? void 0 : _a.call(cat);
    cat.move();
    (_b = bird.makeSound) === null || _b === void 0 ? void 0 : _b.call(bird);
    bird.move();
    fish.move();
}
function task2() {
    console.log("\n");
    console.log("Task 2 executed--------------------");
    var shapes = [
        new Circle_1.Circle(5),
        new Rectangle_1.Rectangle(4, 6),
        new Triangle_1.Triangle(3, 4, 5)
    ];
    var totalArea = 0;
    var totalPerimeter = 0;
    shapes.forEach(function (shape) {
        totalArea += shape.getArea();
        totalPerimeter += shape.getPerimeter();
    });
    console.log("Total area: ".concat(totalArea.toFixed(2)));
    console.log("Total perimeter: ".concat(totalPerimeter.toFixed(2)));
}
function task3() {
    console.log("\n");
    console.log("Task 3 executed--------------------");
    var camry = new Toyota_1.Toyota("Camry", 2021, "White", false);
    var corolla = new Toyota_1.Toyota("Corolla", 2022, "Black", false);
    var bmwX5 = new BMW_1.BMW("X5", 2023, "Blue");
    var bmwX3 = new BMW_1.BMW("X3", 2021, "Red");
    var teslaModelS = new Tesla_1.Tesla("Model S", 2022, "Silver");
    var teslaModelX = new Tesla_1.Tesla("Model X", 2023, "Black");
    camry.displayDetails();
    corolla.displayDetails();
    bmwX5.displayDetails();
    bmwX3.displayDetails();
    teslaModelS.displayDetails();
    teslaModelX.displayDetails();
}
function task4() {
    console.log("\n");
    console.log("Task 4 executed--------------------");
    function isPayable(object) {
        return 'pay' in object;
    }
    var employees = [
        new Developer_1.Developer("Andriy", 30, 60000),
        new Developer_1.Developer("Bob", 25, 55000),
        new Manager_1.Manager("Tanya", 45, 80000),
        new Manager_1.Manager("Oleg", 40, 75000)
    ];
    var totalAnnualBonus = 0;
    employees.forEach(function (employee) {
        totalAnnualBonus += employee.getAnnualBonus();
        if (isPayable(employee)) {
            employee.pay();
        }
    });
    console.log("Total annual bonus for all employees: ".concat(totalAnnualBonus.toFixed(2)));
}
function task5() {
    console.log("\n");
    console.log("Task 5 executed--------------------");
    var course1 = new OnlineCourse_1.OnlineCourse("TypeScript Basics", 10);
    var course2 = new OnlineCourse_1.OnlineCourse("Advanced TypeScript", 12);
    var course3 = new OnlineCourse_1.OnlineCourse("JavaScript for Beginners", 8);
    course1.registerStudent("Andriy");
    course1.registerStudent("Bob");
    course2.registerStudent("Andriy");
    course3.registerStudent("Tanya");
    course3.registerStudent("Oleg");
    var courseManager = new CourseManager_1.CourseManager();
    courseManager.addCourse(course1);
    courseManager.addCourse(course2);
    courseManager.addCourse(course3);
    courseManager.listCourses();
    courseManager.removeCourse("Advanced TypeScript");
    console.log("After removing 'Advanced TypeScript':");
    courseManager.listCourses();
}
function task6() {
    console.log("\n");
    console.log("Task 6 executed--------------------");
    var library = new Library_1.Library();
    var book1 = new Book_1.Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
    var magazine1 = new Magazine_1.Magazine("National Geographic", "Various", 202);
    var dvd1 = new DVD_1.DVD("Inception", "Christopher Nolan", 148);
    library.addItem(book1);
    library.addItem(magazine1);
    library.addItem(dvd1);
    console.log("Available items:");
    library.listAvailableItems();
    var itemToBorrow = library.findItemByName("Inception");
    if (itemToBorrow) {
        itemToBorrow.borrow();
        library.listAvailableItems();
    }
}
task1();
task2();
task3();
task4();
task5();
task6();
