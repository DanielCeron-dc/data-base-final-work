import React from 'react';
import styles from './Child.module.css';

import { IChild } from 'core/entities/child';
import Node from '../Node/Node';

interface IProps {
    child: IChild<number, string>;
    rowIndex: number;
    isLeaf?: boolean;
}

//generates a unique id for each child
const getId = (): string => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const Child: React.FC<IProps> = ({ child, rowIndex, isLeaf }) => {
    
    const uniqueKey = `${getId()}`;

    return <div className={styles.base} >
        {!isLeaf ? <>
            <div className={styles.circle} id={`child ${uniqueKey}`} />
        </> :
            <span className={styles.tooltip}>
                {child.value}
            </span>
        }
        {child.key && <>
            <div className={styles.child} >
                {child.key}
            </div>
        </>}
        {child.node && <>
            <Node node={child.node} rowIndex={rowIndex + 1} id={uniqueKey} />
        </>}
    </div>
}
export default Child;