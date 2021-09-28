import React, { CSSProperties, useEffect,} from 'react';
import Node from "./Node/Node";
import { useTreeStore } from 'web/store/useTreeStore';

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
    const { tree, height, setTreeFromMemory} = useTreeStore();
    const [rootJSX, setRootJSX] = React.useState<JSX.Element | null>(null);

    useEffect(() => {
        setTreeFromMemory(); 
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