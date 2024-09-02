import { Car } from "./Car";

export class Toyota extends Car {
    private hybrid: boolean; // нова змінна з модифікатором private

    constructor(model: string, year: number, color: string, hybrid: boolean) {
        super("Toyota", model, year, color);
        this.hybrid = hybrid;
    }

    // Реалізація абстрактного методу
    public displayDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}, Hybrid: ${this.hybrid ? "Yes" : "No"}`);
    }
}