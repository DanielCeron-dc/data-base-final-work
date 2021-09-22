import React from 'react';
import ReactTooltip from 'react-tooltip';

type FileProps = {
    
};

const File:React.FC<FileProps> = () => {
    
    return <ReactTooltip place="top" type="dark" id="file" clickable effect='solid'  >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '200px',
        }}>
            234 3456 <br/>
            145 45678 <br />
            12 344556 <br />
        </div>
    </ReactTooltip>
}
export default File;