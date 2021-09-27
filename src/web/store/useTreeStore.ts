import { BPlusTree } from "core/infrastructure/tree";
import localStorageList from "web/hooks/useLocalStorage";
import create from "zustand";


interface TreeStore {
    tree: BPlusTree<number, string>;
    height: number;
    setTree: (tree: BPlusTree<number, string>) => void;
    setDefaultTree: () => void;
    setTreeFromMemory: () => boolean;
    clean: () => void;
    add: (key: number, value: string) => void;
    remove: (key: number) => void;
}

export const useTreeStore = create<TreeStore>((set) => ({
    tree: new BPlusTree<number, string>(5),
    height: 0,
    setTree: (tree) => set({ tree: tree, height: tree.getHight() }),

    setDefaultTree: () => {
        const defaultTree = new BPlusTree<number, string>(4);
        defaultTree.add(1, "one");
        defaultTree.add(2, "two");
        defaultTree.add(3, "three");
        defaultTree.add(4, "four");
        defaultTree.add(5, "five");
        defaultTree.add(6, "six");
        defaultTree.add(7, "seven");
        defaultTree.add(8, "eight");
        defaultTree.add(9, "nine");
        defaultTree.add(10, "ten");
        defaultTree.add(11, "eleven");
        set({ tree: defaultTree, height: 4});
    },
    
    setTreeFromMemory: ():boolean => {
        const arrayInMemory = new localStorageList("tree").getValues;
        if (arrayInMemory.length === 0) {
            return false;
        }
        const newTree = new BPlusTree<number, string>(5);
        arrayInMemory.forEach((item) => {
            newTree.add(parseInt(item.key), item.value);
        });
        set({ tree: newTree, height: newTree.getHight() });
        return true;
    }, 

    add: (key, value) => set(state => {
        const treeCopy: BPlusTree<number, string> = new BPlusTree<number, string>(5);
        treeCopy.root = state.tree.root;
        treeCopy.add(key, value);
        new localStorageList("tree").addValue({ key: key.toString(), value: value });
        return { tree: treeCopy , height: treeCopy.getHight() };
    }),

    clean: () => set(() => {
        const treeCopy: BPlusTree<number, string> = new BPlusTree<number, string>(5);
        new localStorageList("tree").clean();
        return { tree: treeCopy, height: 0 };
    }),

    remove: (key) => set(state => {
        return state;
    }),
}));