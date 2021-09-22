import React from 'react';
import Integrants from './Integrants';
import File from './File';
import Agregar from './Agregar';
import Buscar from './Buscar';
import Eliminar from './Eliminar';

const Index:React.FC = () => {
    
    return <>
        <Integrants />
        <File />
        <Agregar />
        <Buscar />
        <Eliminar />
    </>
}
export default Index;