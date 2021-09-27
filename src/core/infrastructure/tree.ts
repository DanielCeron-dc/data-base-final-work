import { IChild } from "core/entities/child";
import { INode } from "core/entities/node";

export class BPlusTree<K, V> {
    root: INode<K, V>;
    branching: number;
    comparator?: (a: K, b: K) => -1 | 0 | 1;

    public constructor(branching: number, comparator?: (a: K, b: K) => -1 | 0 | 1) {
        this.branching = branching;
        this.comparator = comparator;
        this.root = { isLeaf: true, children: [] };
    }

    /**
     * @param key The key to search for
     * @returns The Value associated with the key
     */
    public find(key: K): V | null {
        let leaf = this.findLeaf(key, this.root);
        let { index, found } = this.getChildIndex(key, leaf);
        if (found) {
            return leaf.children[index].value;
        } else {
            return null;
        }
    }
    

    public add(key: K, value: V) {
        let leaf = this.findLeaf(key, this.root);
        let { index, found } = this.getChildIndex(key, leaf);

        //* if the key is found, replace the value
        if (found) {
            leaf.children[index].value = value;
            return;
        }

        //*  Insert the new child at the given index

        leaf.children.splice(index, 0, { key, value, node: null });

        //* If the leaf is full, split it
        if (leaf.children.length > this.branching - 1) {
            this.split(leaf);
        }
    }


    /**
     * This is a recursive function that slpit the node and redistributes the Tree
     * @param node The node to split 
     */
    private split(node: INode<K, V>) {
        let midIndex = Math.floor((node.children.length - (node.isLeaf ? 0 : 1)) / 2);
        let midKey = node.children[midIndex].key; //! we are subtracting 1 because the last child is null


        //* This is the new node that will be inserted into the parent and it will be the right child of the parent
        let newNode: INode<K, V> = {
            isLeaf: node.isLeaf,
            parent: node.parent,
            children: node.children.slice(midIndex) //* the slice method give you the midpoint and the rest of the children 
        };

        node.children = node.children.slice(0, midIndex); //* eliminate the midpoint and the rest of the children (eliminate the right part) 

        //* If the node is not a leaf, we give the fist child of the newNode to node and assign the parent of the newNode's children to newNode
        if (!node.isLeaf) {
            let middleChild = newNode.children.shift(); //* remove the first element of the newNode and get the child 
            node.children.push(
                {
                    key: middleChild ? middleChild.key : null,
                    node: middleChild ? middleChild.node : null,
                    value: middleChild ? middleChild.value : null
                });
            for (let child of newNode.children) {
                if (child.node) child.node.parent = newNode;
            }
        }

        let parent = node.parent;
        if (parent) {
            let { index } = this.getChildIndex(midKey!, parent); //! we are subtracting 1 because the last child is null so we are sure that the index is correct
            parent.children.splice(index, 0, { key: midKey, node: node, value: null });
            parent.children[index + 1].node = newNode;
            if (parent.children.length > this.branching) {
                this.split(parent);
            }
        } else {
            //* If doesn't have a parent, we create a new root
            this.root = {
                children: [
                    { key: midKey, node: node, value: null },
                    { key: null, node: newNode, value: null }]
            };
            node.parent = newNode.parent = this.root;
        }
    }


    /**
     * @param key The key to search for
     * @param node The node to search in
     * @returns The leaf node that contains the key
     */
    private findLeaf(key: K, node: INode<K, V>): INode<K, V> {
        if (node.isLeaf) {
            return node;
        } else {
            let { index, found } = this.getChildIndex(key, node);
            //* if the key is found go to the right child till we find the leaf
            let child = node.children[index + (found ? 1 : 0)];
            return this.findLeaf(key, child.node!); //! only if is a leaf it could be null
        }
    }

    /**
     * @param key The key to search for
     * @param node The node to search in
     * @returns An object with the following properties:
     * - index: The index of the child key that is greater than or equal to the given key
     * - found: Whether or not the key was found
     * */
    private getChildIndex(key: K, node: INode<K, V>): { index: number, found: boolean } {
        if (node.children.length === 0) {
            return { index: 0, found: false };
        }

        let end = node.children.length - 1;

        //* the last node is one that doesn't have a key 
        if (!node.isLeaf) {
            end--;
        }

        let index = this.getChildIndexBinary(key, node.children, 0, end);
        let comparison = this.compareKey(key, node.children[index].key!);
        if (comparison === 0) {
            return { index: index, found: true };
        } else if (comparison < 0) {
            return { index: index, found: false };
        } else {
            return { index: index + 1, found: false };
        }
    }


    /**
     * @param key The key to search for
     * @param children The children to search in
     * @param start The start index
     * @param end The end index
     * @returns The index of the child key that is greater than or equal to the given key
     */
    private getChildIndexBinary(key: K, children: IChild<K, V>[], start: number, end: number): number {
        if (start === end) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let comparison = this.compareKey(key, children[mid].key!);
        if (comparison === 0) {
            return mid;
        } else if (comparison < 0) {
            return this.getChildIndexBinary(key, children, start, Math.max(start, mid - 1));
        } else {
            return this.getChildIndexBinary(key, children, Math.min(end, mid + 1), end);
        }
    }


    /**
     * @param a The first key
     * @param b The second key
     * @returns -1 if a < b, 
     * @returns  0 if a === b
     * @returns  1 if a > b
     */
    private compareKey(a: K, b: K): -1 | 0 | 1 {
        if (this.comparator) {
            return this.comparator(a, b);
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    public getHight(): number {
        return this.getHightR(1 , this.root); 
    }

    private getHightR(counter: number, node: INode<K,V>): number {
        if (node.isLeaf) {
            return counter;
        } else {
            return this.getHightR(counter + 1, node.children[0].node!);
        }
    }


    public print() {
        this.printNode({ key: null, node: this.root, value: null }, "", true, true, false);
    }

    private printNode(nodeItem: IChild<K, V>, prefix: string, isLast: boolean, isRoot: boolean, isLeaf?: boolean) {
        if (!isRoot) {
            let valueString = ` [${nodeItem.value}]`;
            console.log(prefix + (isLast ? "└── " : "├── ") + nodeItem.key + valueString);
        }
        if (!isLeaf) {
            let node = nodeItem.node;
            for (let i = 0; i < node!.children.length; i++) {
                let isLastChild = (i === node!.children.length - 1);
                this.printNode(node!.children[i], prefix + (isLast ? "    " : "│   "), isLastChild, false, node?.isLeaf);
            }
        }
    }
}

