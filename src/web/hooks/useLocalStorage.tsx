
interface IValue {
    value: string;
    key: string;
}

class localStorageList {
    private values: IValue[] = [];
    key: string;

    get getValues() {
        return this.values;
    }

    constructor(key: string) {
        this.values = JSON.parse(localStorage.getItem(key) || '[]');
        this.key = key;
    }

    public addValue(value: IValue) {
        this.values.push(value);
        this.save();
    }

    public removeValue(value: IValue) {
        this.values = this.values.filter(item => item.key !== value.key);
        this.save();
    }

    public clean() {
        this.values = [];
        this.save();
    }

    private save() {
        localStorage.setItem(this.key, JSON.stringify(this.values));
    }
}


export default localStorageList;