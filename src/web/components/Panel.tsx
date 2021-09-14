import React from 'react';
import Members from './Members/Members';
import dataBaseImg from 'assets/img/database.png'; 


const style: React.CSSProperties = {
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '100%',
    width: '25rem',
    boxSizing: 'border-box',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}


const Panel: React.FC = () => <div style={style}>
    <img src={dataBaseImg} alt="dataBaseImg" style={{width: '100%', borderRadius: '1rem 1rem 0 0', marginBottom: 'auto'}}/>
   
    <h2 style={{ padding: 0, margin: 0 }} >Trabajo Final</h2>
    <p style={{padding: 0, margin: 0}}>
        <a href="https://github.com/DanielCeron-dc/data-base-final-work">Codigo </a>
    </p>
    <Members/>
</div>
export default Panel;