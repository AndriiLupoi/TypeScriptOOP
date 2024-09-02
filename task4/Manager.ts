import { Employee } from "./Employee";
import { Payable } from "./Payable";

export class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    // Реалізація абстрактного методу
    public getAnnualBonus(): number {
        return this.salary * 0.20; // 20% бонусу від зарплати
    }

    // Реалізація методу інтерфейсу Payable
    public pay(): void {
        console.log(`${this.name} (Manager) has been paid: ${this.getAnnualBonus()}$`);
    }
}