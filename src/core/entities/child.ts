import { INode } from "./node";

export interface IChild<K, V> {
    key: K;
    value?: V;
    node?: INode<K, V>;
}

