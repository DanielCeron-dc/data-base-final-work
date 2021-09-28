import { BPlusTree } from "core/infrastructure/tree";
import localStorageList from "web/hooks/useLocalStorage";
import create from "zustand";


interface TreeStore {
    tree: BPlusTree<number, string>;
    height: number;
    setTree: (tree: BPlusTree<number, string>) => void;
    setTreeFromMemory: () => boolean;
    clean: () => void;
    add: (key: number, value: string) => void;
    generateRandomTree: (n: number) => void;
}

export const useTreeStore = create<TreeStore>((set) => ({
    tree: new BPlusTree<number, string>(5),
    height: 0,
    setTree: (tree) => set({ tree: tree, height: tree.getHight() }),
    
    setTreeFromMemory: (): boolean => {
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
        return { tree: treeCopy, height: treeCopy.getHight() };
    }),

    clean: () => set(() => {
        const treeCopy: BPlusTree<number, string> = new BPlusTree<number, string>(5);
        new localStorageList("tree").clean();
        return { tree: treeCopy, height: 0 };
    }),

    generateRandomTree: (n: number) => {
        set((state) => {
            state.clean();
            for (let i = 0; i < n; i++) {
                state.add(Math.floor(Math.random() * 1000), i.toString());
            }
        })
    }
}));