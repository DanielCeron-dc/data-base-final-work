import React from 'react';
import ReactTooltip from 'react-tooltip';

type IntegrantsProps = {
    
}; 

const Integrants:React.FC<IntegrantsProps> = () => {
    
    return <ReactTooltip place="top" type="dark" id="integrants" clickable effect='solid' >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '200px',
       
        }}>
            <h1>Integrantes</h1>
            <ul>
                <li>
                    Angie Gomez
                </li>
                <li>
                    Daniel Cerón 
                </li>
                <li>
                    Maria Fernanda
                </li>
                <li>
                    Juan Ruiz 
                </li>
            </ul>
        </div>
    </ReactTooltip>
}
export default Integrants;