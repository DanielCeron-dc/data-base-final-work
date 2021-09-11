import { IChild } from "./child";

export interface INode<K, V> {
    isLeaf?: boolean;
    parent?: INode<K, V>;
    children: IChild<K, V>[];
}