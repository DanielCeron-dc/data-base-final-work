import { INode } from "./node";

export interface ITree<k, v> {
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