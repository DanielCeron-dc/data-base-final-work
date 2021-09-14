import React from 'react';
import styles from './Child.module.css';

import { IChild } from 'core/entities/child';
import Node from '../Node/Node';

interface IProps {
    child: IChild<number, string>;
    rowIndex: number;
}


const Child: React.FC<IProps> = ({ child, rowIndex }) => {

    return <div className = {styles.base} >
        <div className={styles.child} id = {`child ${child.key}`}>
            {child.key}
        </div>
        <div className = {styles.tooltip}>
            {child.value}
        </div>
        {child.node && <>
            <Node node={child.node} rowIndex={rowIndex + 1} id={child.key} />
        </>}
    </div>
}
export default Child;