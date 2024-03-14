import { OrderItem } from "src/app/orders/model/order-item";

export class Order {
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get orderItems(): OrderItem[] {
        return this._orderItems;
    }
    public set orderItems(value: OrderItem[]) {
        this._orderItems = value;
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get orderNumber(): string {
        return this._orderNumber;
    }
    public set orderNumber(value: string) {
        this._orderNumber = value;
    }
    public get orderDate(): Date {
        return this._orderDate;
    }
    public set orderDate(value: Date) {
        this._orderDate = value;
    }
    public get orderStatus(): string {
        return this._orderStatus;
    }
    public set orderStatus(value: string) {
        this._orderStatus = value;
    }

    constructor(
        private _id: number,
        private _orderNumber: string,
        private _orderDate: Date,
        private _orderStatus: string,
        private _orderItems: OrderItem[],
        private _userId: number
    ){}   
}

