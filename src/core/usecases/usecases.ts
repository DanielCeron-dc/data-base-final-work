import { BPlusTree } from "../infrastructure/tree";

export class usecases {
    constructor() { }
    tree: BPlusTree<number, string> = new BPlusTree<number, string>(4 , null);

    add(key: number, value: string) {
        this.tree.insert(key, value);
    }

    get(key: number) {
        return this.tree.find(key);
    }

    remove(key: number) {
        this.tree.remove(key);
    }

}

