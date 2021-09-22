import { BPlusTree } from "../infrastructure/tree";

export const tree = new BPlusTree<number, string>(3);

tree.add(1, "one");
tree.add(2, "two");
tree.add(3, "three");
tree.add(4, "four");
tree.add(5, "five");
tree.add(6, "six");
tree.add(7, "seven");
tree.add(8, "eight");
tree.add(9, "nine");
tree.add(10, "ten");


