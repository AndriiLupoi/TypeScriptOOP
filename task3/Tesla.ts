import { Car } from "./Car";

export class Tesla extends Car {
    constructor(model: string, year: number, color: string) {
        super("Tesla", model, year, color);
    }

    public displayDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Color: ${this.color}`);
    }
}