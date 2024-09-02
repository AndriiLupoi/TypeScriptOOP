export interface LibraryItem {
    title: string;
    author: string;
    borrow(): void;
    getDetails(): string;
}