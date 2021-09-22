import React from 'react';
import ReactDom from 'react-dom';


import { INode } from 'core/entities/node';
import Child from '../child/Child';
import styles from "./Node.module.css"; 
import Xarrow from 'react-xarrows';

let order = 0;

export interface INodeProps {
    node: INode<number, string>;
    rowIndex: number;
    id?: string;
    order?: number;
}


const Node: React.FC<INodeProps> = (props) => {
    
    const nodeElement = <div className={styles.node} id={`node ${props.id}`} style = {{order}}>
        {props.node.children.map((child ) => {
            return <Child child={child} key={child.key} rowIndex={props.rowIndex} isLeaf={props.node.isLeaf}/>
        })}
    </div>

    const TreeRowElement = document.getElementById(`row ${props.rowIndex}`);
    
    order++;
    return TreeRowElement ?
        <>
            {ReactDom.createPortal(nodeElement, TreeRowElement)}
            {props.id &&
                <Xarrow
                    start={`child ${props.id}`} //can be react ref
                    end={`node ${props.id}`} //or an id
                    lineColor='#000'
                    curveness={0.5}
                    headColor='#000'
                    path="smooth"
                    dashness
                    tailSize={0}
                    headSize={0}
                    zIndex={10}
                />
            }
        </> : null;
}
export default Node;