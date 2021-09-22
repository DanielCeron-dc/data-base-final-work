import React from 'react';

import "./App.css"; 
import TransparentBox from '../components/transparentBox';
import RightPanel from './RightPanel';
import forestImg from 'assets/img/forest.jpg';
import ToolTips from 'web/components/tooltips/Index'; 


const App:React.FC = () => {
    
    return <div
        className="App"
    >
        <img className= "background" src={forestImg} alt="forest" />
        <TransparentBox>
            <RightPanel />
            <ToolTips />
        </TransparentBox>
    </div>
}
export default App;