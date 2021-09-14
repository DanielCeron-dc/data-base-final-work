import React, { CSSProperties } from 'react';

import { exampleTree } from "core/infrastructure/tree";
import Node from "./Node/Node"; 



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

const Tree:React.FC = () => {
    return <div id="tree" style={style}>
        {new Array(3).fill(0).map((_, i) =>
            <div id = {`row ${i}`} key = {i} style = {rowStyle}/>
        )}
        <Node  node={exampleTree} rowIndex = {0}/>
    </div>
}
export default Tree;