import { INode } from "./node";

export interface IChild<K, V> {
    key: K | null;
    value: V | null;
    node: INode<K, V> | null;
}
