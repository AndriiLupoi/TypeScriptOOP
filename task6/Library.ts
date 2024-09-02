import { LibraryItem } from "./LibraryItem";

export class Library {
    private items: LibraryItem[] = [];

    public addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    public findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    public listAvailableItems(): void {
        this.items.forEach(item => {
            console.log(item.getDetails());
        });
    }

}