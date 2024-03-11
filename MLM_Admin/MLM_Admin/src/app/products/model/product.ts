export class Product {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get productNumber(): string {
        return this._productNumber;
    }
    public set productNumber(value: string) {
        this._productNumber = value;
    }
    public get productName(): string {
        return this._productName;
    }
    public set productName(value: string) {
        this._productName = value;
    }
    public get quantityInStock(): number {
        return this._quantityInStock;
    }
    public set quantityInStock(value: number) {
        this._quantityInStock = value;
    }
    public get unitPrice(): number {
        return this._unitPrice;
    }
    public set unitPrice(value: number) {
        this._unitPrice = value;
    }
    public get categoryId(): number {
        return this._categoryId;
    }
    public set categoryId(value: number) {
        this._categoryId = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get size(): string {
        return this._size;
    }
    public set size(value: string) {
        this._size = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    constructor(
        private _id: number,
        private _productNumber: string,
        private _productName: string,
        private _quantityInStock: number,
        private _unitPrice: number,
        private _categoryId: number,
        private _image: string,
        private _color: string,
        private _size: string,
        private _description: string

    ){}
}
