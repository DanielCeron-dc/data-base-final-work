import React from 'react';
import ReactTooltip from 'react-tooltip';
import useForm from 'web/hooks/useForm';
import Button from '../forms/Button/Button';
import Input from '../forms/Input';

import { useTreeStore } from 'web/store/useTreeStore';


const Agregar: React.FC = () => {    
    const { register, onSubmit, cleanForm } = useForm();
    const { add } = useTreeStore();

    return <ReactTooltip place="top" type="dark" id="agregar" clickable effect='solid' delayHide = {250} >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '250px',
        }}>
            <form onSubmit={onSubmit(({ key, value }) => {
                key.ref?.focus();
                add(parseInt(key.value) , value.value);
                cleanForm();
            })}>
                <Input type="number" ref={register} label = "key"  name = "key" required/>
                <Input type="text" ref={register} label = "value" name = "value"  required />
                <Button type="submit">Agregar</Button>
            </form>
        </div>
    </ReactTooltip>
}
export default Agregar;