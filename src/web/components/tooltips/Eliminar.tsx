import React from 'react';
import ReactTooltip from 'react-tooltip';
import useForm from 'web/hooks/useForm';
import Button from '../forms/Button/Button';
import Input from '../forms/Input';

type EliminarProps = {
    
};

const Eliminar:React.FC<EliminarProps> = () => {
    
    const { register, onSubmit, cleanForm } = useForm();

    return <ReactTooltip place="top" type="dark" id="eliminar" clickable effect='solid' delayHide={250}  >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '200px',

        }}>
            <form onSubmit={onSubmit(data => {
                console.log(data.key.value);
                cleanForm();
            })}>
                <Input type="text" ref={register} label={"Key"} name = "key" />
                <Button type="submit" variant = "danger" >Eliminar</Button>
            </form>
        </div>
    </ReactTooltip>
}
export default Eliminar;