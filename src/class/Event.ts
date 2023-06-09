class Event {

    private readonly _id: number;
    private readonly _name: string;
    private readonly _isDiscover: boolean;
    private readonly _date: Date;

    constructor(id: number, name: string, isDiscover: boolean, date: Date) {
        this._id = id;
        this._name = name;
        this._isDiscover = isDiscover;
        this._date = date;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get isDiscover(): boolean {
        return this._isDiscover;
    }

    get date(): Date {
        return this._date;
    }
}

export default Event;