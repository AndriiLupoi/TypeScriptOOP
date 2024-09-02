import { Animal } from "./Animal";

export class Cat implements Animal {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age ?? 0; // Якщо age не передано, присвоюємо значення за замовчуванням, наприклад, 0
    }

    move(): void {
        console.log(`${this.name} walks`);
    }

    makeSound?(): void {
        console.log(`${this.name} says moew`);
    }
}