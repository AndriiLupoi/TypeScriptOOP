import { LibraryItem } from "./LibraryItem";

export class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration: number;
    private borrowed: boolean = false;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    public borrow(): void {
        console.log(`DVD: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }

    public getDetails(): string {
        return `DVD: ${this.title}, Author: ${this.author}, Duration: ${this.duration} minutes, Borrowed: ${this.borrowed}`;
    }
}