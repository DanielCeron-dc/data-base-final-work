import React from 'react';
import ReactTooltip from 'react-tooltip';
import useForm from 'web/hooks/useForm';
import Button from '../forms/Button/Button';
import Input from '../forms/Input';

import { useTreeStore } from 'web/store/useTreeStore';


const Aleatorio: React.FC = () => {
    const { register, onSubmit, cleanForm } = useForm();
    const { generateRandomTree } = useTreeStore();

    return <ReactTooltip place="top" type="dark" id="aleatorio" clickable effect='solid' delayHide={250}  >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '250px',
        }}>
            <form onSubmit={onSubmit(({ n }) => {
                generateRandomTree(parseInt(n.value));
                cleanForm();
            })}>
                <h1>Generar un arbol aleatoriamente</h1>
                <Input type="number" ref={register} label="N" name="n" required min={0}/>
                <Button type="submit">Generar</Button>
            </form>
        </div>
    </ReactTooltip>
}
export default Aleatorio;