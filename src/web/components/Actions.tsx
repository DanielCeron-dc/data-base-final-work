import React, { CSSProperties } from 'react';
import Button from './forms/Button/Button';
import { ReactComponent as TreeSvg } from 'assets/svg/tree.svg';
import {ReactComponent as FileSvg} from 'assets/svg/file.svg';


const style: CSSProperties = {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
}


const Actions: React.FC = () => <div style={style}>
    

    <Button variant = "outline" style= {{padding:'5px 10px'}}>
        <TreeSvg height={30} width={30} />
    </Button>
        
    <Button variant = "outline" style= {{padding:'5px 10px'}} selected>
        <FileSvg height={30} width={30} />
    </Button>

    <Button>
        Agregar
    </Button>
    <Button variant = "danger">
        Eliminar
    </Button>
    
</div>
export default Actions;