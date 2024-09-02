import { Animal } from "./Animal";

export class Fish implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} swims`);
    }
}