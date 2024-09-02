export abstract class Car {
    protected brand: string;
    protected model: string;
    private year: number;
    public color: string;
    constructor(brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    abstract displayDetails(): void;

    protected getYear(): number {
        return this.year;
    }
}