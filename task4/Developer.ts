import { Employee } from "./Employee";
import { Payable } from "./Payable";

export class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Реалізація абстрактного методу
    public getAnnualBonus(): number {
        return this.salary * 0.10; // 10% бонусу від зарплати
    }

    // Реалізація методу інтерфейсу Payable
    public pay(): void {
        console.log(`${this.name} (Developer) has been paid: ${this.getAnnualBonus()}$`);
    }
}