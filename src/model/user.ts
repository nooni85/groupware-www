export class User {
    private _email: string | undefined;
    private _name: string | undefined;

    get email(): string | undefined {
        return this._email;
    }

    set email(value: string | undefined) {
        this._email = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }
}