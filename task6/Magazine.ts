import { LibraryItem } from "./LibraryItem";

export class Magazine implements LibraryItem {
    title: string;
    author: string;
    private issueNumber: number;
    private borrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    public borrow(): void {
        console.log(`Magazine: \'${this.title}\' borrowed`);
        this.borrowed = true;
    }

    public getDetails(): string {
        return `Magazine: ${this.title}, Author: ${this.author}, Issue Number: ${this.issueNumber}, Borrowed: ${this.borrowed}`;
    }
}