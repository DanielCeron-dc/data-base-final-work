import { BPlusTree } from "core/infrastructure/tree";
import create from "zustand";


interface TreeStore {
    tree: BPlusTree<number, string>;
    height: number;
    setTree: (tree: BPlusTree<number, string>) => void;
    clean: () => void;
    add: (key: number, value: string) => void;
    remove: (key: number) => void;
}

export const useTreeStore = create<TreeStore>((set) => ({
    tree: new BPlusTree<number, string>(3),
    height: 0,
    setTree: (tree) => set({ tree: tree, height: tree.getHight() }),
    
    add: (key, value) => set(state => {
        const treeCopy: BPlusTree<number, string> = new BPlusTree<number, string>(3);
        treeCopy.root = state.tree.root;
        treeCopy.add(key, value);
        return { tree: treeCopy , height: treeCopy.getHight() };
    }),

    clean: () => set(() => {
        const treeCopy: BPlusTree<number, string> = new BPlusTree<number, string>(3);
        return { tree: treeCopy, height: 0 };
    }),

    remove: (key) => set(state => {
        return state;
    }),
}));