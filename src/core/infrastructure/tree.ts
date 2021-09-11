
import { INode } from "../entities/node";



interface ITree<k, v> {
    getRoot(): INode<k, v> | null;
    setRoot(node: INode<k, v>): void;
    insert(key: k, value: v): void;
    remove(key: k): void;
    find(key: k): INode<k, v> | null;
    findMin(): INode<k, v> | null;
    findMax(): INode<k, v> | null;
    findNext(key: k): INode<k, v> | null;
    findPrev(key: k): INode<k, v> | null;
    printNode(): void;
}

export class BPlusTree<k, v> implements ITree<k, v> {

    branching: number;
    compare: ((a: k, b: k) => number) | null;

    constructor(branching: number, compare: ((a: k, b: k) => number) | null ) {
        this.branching = branching;
        this.compare = compare;
    }

    getRoot() {
        return null;
    }

    setRoot(node: INode<k, v>) {
        
    }

    insert(key: k, value: v) {
        
    }

    remove(key: k){
        
    }

    find(key: k) {
        return null;
    }

    findMin(){
        return null;
    }

    findMax() {
        return null;
    }


    findNext(key: k) {
        return null;
    }


    findPrev(key: k) {
        return null;
    }

    printNode() {
        
    }

}