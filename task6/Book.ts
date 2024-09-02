import { LibraryItem } from "./LibraryItem";

export class Book implements LibraryItem {
    title: string;
    author: string;
    private pages: number;
    private borrowed: boolean = false;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    public borrow(): void {
        console.log(`Book: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }

    public getDetails(): string {
        return `Book: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Borrowed: ${this.borrowed}`;
    }
}