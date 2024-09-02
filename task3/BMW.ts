import { Car } from "./Car";

export class BMW extends Car {
    constructor(model: string, year: number, color: string) {
        super("BMW", model, year, color);
    }

    public displayDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}`);
    }
}