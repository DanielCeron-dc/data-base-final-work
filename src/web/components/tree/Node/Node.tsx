import React, { forwardRef } from 'react';
import ReactDom from 'react-dom';


import { INode } from 'core/entities/node';
import Child from '../child/Child';
import styles from "./Node.module.css"; 
import Xarrow from 'react-xarrows';

export interface INodeProps {
    node: INode<number, string>;
    rowIndex: number;
    id?: number;
}

const Node: React.FC<INodeProps> = (props) => {
    
    const [domReady, setDomReady] = React.useState(false)

    React.useEffect(() => {
        setDomReady(true)
    }, []); 
    
    const nodeElement = <div className={styles.node} id={`node ${props.id}`}>
        {props.node.children.map((child) => {
            return <Child child={child} key={child.key} rowIndex={props.rowIndex}/>
        })}
    </div>
    return domReady ?
        <>
            {ReactDom.createPortal(nodeElement, document.getElementById(`row ${props.rowIndex}`)!)}
            {props.id &&
                <Xarrow
                    start={`child ${props.id}`} //can be react ref
                    end={`node ${props.id}`} //or an id
                lineColor='#000'
                curveness={0.5}
                headColor='#000'
                path="straight"
                tailSize={0}
                headSize={0}
                />
            }
        </> : null;
}
export default Node;