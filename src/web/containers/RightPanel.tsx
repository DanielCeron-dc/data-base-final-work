import React, { CSSProperties } from 'react';
import Tree from 'web/components/tree/Tree';
import Actions from '../components/Actions';

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '10px',
    position: 'relative',
}

const RightPanel: React.FC = () => {
    return <div style={style}>
        <h1 style = {{margin: '0 10px', position: 'absolute'}}>
            B+ Tree
        </h1>
        <div style={{height: '100%', display: 'grid', placeItems: 'center'}}>
            <Tree />
        </div>
        <Actions/>
    </div>
}

export default RightPanel;



