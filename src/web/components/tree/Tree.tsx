import React, { CSSProperties, useEffect,} from 'react';
import Node from "./Node/Node";
import { useTreeStore } from 'web/store/useTreeStore';
import { BPlusTree } from 'core/infrastructure/tree';

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

const rowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
}

const Tree: React.FC = () => {
    const { tree, setTree, height } = useTreeStore();
    const [ rootJSX , setRootJSX ] = React.useState<JSX.Element | null>(null);

    useEffect(() => {
        const defaultTree = new BPlusTree<number, string>(3);
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
        setTree(defaultTree);
    }, []);

    useEffect(() => {
        if (document.getElementById(`row ${height - 1}`)) {
            setRootJSX(<Node node={tree.root} rowIndex={0} />); 
        }
    }, [height, tree]);

    return <div id="tree" style={style}>
        {new Array(height).fill(0).map((_, i) => {
            return <div id={`row ${i}`} key={i} style={rowStyle}/>
        })}
        {rootJSX}
    </div>
}
export default Tree;