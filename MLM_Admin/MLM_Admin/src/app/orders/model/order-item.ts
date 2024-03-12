import { Product } from "src/app/products/model/product";

export class OrderItem {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get productId(): string {
        return this._productId;
    }
    public set productId(value: string) {
        this._productId = value;
    }
    public get product(): Product {
        return this._product;
    }
    public set product(value: Product) {
        this._product = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    constructor(
        private _id: number,
        private _productId: string,
        private _product: Product,
        private _quantity: number,
        private _price: number = 0.0
    ){}     
}
