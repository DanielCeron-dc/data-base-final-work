import React, { useState } from 'react';


import ReactTooltip from 'react-tooltip';
import useForm from 'web/hooks/useForm';
import { useTreeStore } from 'web/store/useTreeStore';
import Button from '../forms/Button/Button';
import Input from '../forms/Input';
import TimeBox from '../TimeBox/TimeBox';


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const Buscar:React.FC = () => {
    
   
    const { register, onSubmit, cleanForm } = useForm();
    const [times, setTimes] = React.useState<{ number: number, color: string }[]>([]);
    const { tree } = useTreeStore();
    const [value, setValue] = useState<string | undefined>(undefined); 


    return <ReactTooltip place="right" type="dark" id="buscar" clickable effect='solid' delayHide={250} >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '450px',
        }}>
            <form onSubmit={onSubmit(data => {

                let start = performance.now();
                const value = tree.find(parseInt(data.key.value));
                let end = performance.now();
                let newTime = end - start;                 
                let copyTimes = [...times];

                if (times.length > 4) {
                    copyTimes.pop();
                }
                setTimes([{ number: newTime , color: getRandomColor() }, ...copyTimes]);
                setValue(value?.toString());
                cleanForm();
            })}>
                <Input type="text" ref={register} label={"Key"} name="key" required />
                <TimeBox times={times} />
                <h3 style  = {{color: 'mediumseagreen'}}> VALOR:  {value  ? value : 'no encontrado'}  </h3>
                <Button type="submit">Buscar (indexada)</Button>
                <Button type="submit">Buscar (no indexada)</Button>
            </form>
        </div>
    </ReactTooltip>
}
export default Buscar;