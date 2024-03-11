export class User {
    public get invoiceAdress(): string {
        return this._invoiceAdress;
    }
    public set invoiceAdress(value: string) {
        this._invoiceAdress = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get mail(): string {
        return this._mail;
    }
    public set mail(value: string) {
        this._mail = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: Date) {
        this._dateOfBirth = value;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get deliveryAddress(): string {
        return this._deliveryAddress;
    }
    public set deliveryAddress(value: string) {
        this._deliveryAddress = value;
    }
    public get isAdmin(): boolean {
        return this._isAdmin;
    }
    public set isAdmin(value: boolean) {
        this._isAdmin = value;
    }

    constructor(
        private _id: number,
        private _firstName: string,
        private _lastName: string,
        private _mail: string,
        private _password: string,
        private _dateOfBirth: Date,
        private _phoneNumber: string,
        private _invoiceAdress: string,
        private _deliveryAddress: string,
        private _isAdmin: boolean
    ){}
}

