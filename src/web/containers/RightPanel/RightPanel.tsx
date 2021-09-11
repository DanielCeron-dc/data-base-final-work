import React, { CSSProperties } from 'react';
import Actions from '../../components/Actions';



const style: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '10px',
}


const RightPanel:React.FC = () => {
    
    return <div style={style}>
        <Actions/>
    </div>
}
export default RightPanel;