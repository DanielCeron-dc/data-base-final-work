
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
    lenght: number = 0; 

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

export const exampleTree = {
    key: "",
    children: [
        {
            key: 1,
            value: "hla",
            node: {
                isLeaf: true,
                parent: undefined,
                children: [
                    {
                        key: 2,
                        value: "two",
                        node: undefined, 
                    }, {
                        key: 3,
                        value: "three",
                        node: undefined,
                    }
                ]
            },
        },
        {
            key: 4,
            value: "four",
            node: {
                isLeaf: true,
                parent: undefined,
                children: [
                    {
                        key: 5,
                        value: "five",
                        node: undefined,
                    }, {
                        key: 6,
                        value: "six",
                        node: {
                            isLeaf: true,
                            parent: undefined,
                            children: [
                                {
                                    key: 7,
                                    value: "seven",
                                    node: undefined,
                                }, {
                                    key: 8,
                                    value: "ocho",
                                    node: undefined,
                                }
                            ]
                        },
                    }
                ]
            },
        },
        {
            key: 9,
            value: "hla",
            node: {
                isLeaf: true,
                parent: undefined,
                children: [
                    {
                        key: 10,
                        value: "two",
                        node: undefined,
                    }, {
                        key:11,
                        value: "three",
                        node: undefined,
                    }
                ]
            },
        },
    ],
    isLeaf: false,
    parent: undefined,
} as INode<number, string>;