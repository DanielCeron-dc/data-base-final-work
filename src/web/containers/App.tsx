import React from 'react';
import Panel from '../components/Panel';
import TransparentBox from '../components/transparentBox';
import "./App.css"; 
import RightPanel from './RightPanel/RightPanel';

const App:React.FC = () => {
    
    return <div
        className="App"
    >
        <TransparentBox>
            <Panel/>
            <RightPanel/>
        </TransparentBox>
    </div>
}
export default App;