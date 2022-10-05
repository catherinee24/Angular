export class Cookie {
    // public name: string;
    // public brand: string;
    // public color: string;
    // public price: number;
    // public stock: boolean;

    // constructor(name:string, brand:string, color:string, price:number, stock:boolean) {
    //     this.name = name;
    //     this.brand = brand;
    //     this.color = color;
    //     this.price = price;
    //     this.stock = stock;
    // }

    // another way to make it
    constructor(
    public name: string,
    public brand: string,
    public flavor: string,
    public size: string,
    public price: number,
    public stock: boolean
    ) {}
}