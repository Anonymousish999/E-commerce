//search the product from the list and after the display, detelte the record from the list

export class Product {
    private id: number;
    private name: string;
    private price: number;
    private category: string;

    constructor(id: number, name: string, price: number, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCategory(): string {
        return this.category;
    }
}