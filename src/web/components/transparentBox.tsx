import React, { CSSProperties } from 'react';

type transparentBoxProps = {
    children: React.ReactNode;
};

const style: CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    minWidth: '60rem',
    width: '85vw',
    height: '90vh',
    borderRadius: '1rem',
    display: 'flex',
}


const TransparentBox: React.FC<transparentBoxProps> = (props) => <div style={style}>
    { props.children}
</div>
export default TransparentBox;