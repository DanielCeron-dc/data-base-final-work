import React from 'react';
import Integrants from './Integrants';
import File from './File';
import Agregar from './Agregar';
import Buscar from './Buscar';
import Aleatorio from './Aleatorio';

const Index:React.FC = () => {
    
    return <>
        <Integrants />
        <File />
        <Agregar />
        <Buscar />
        <Aleatorio />
    </>
}
export default Index; 