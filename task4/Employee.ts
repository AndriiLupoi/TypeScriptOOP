export abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Абстрактний метод для розрахунку річного бонусу
    abstract getAnnualBonus(): number;
}