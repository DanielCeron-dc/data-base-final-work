import React, { FormEvent, ReactFragment, useEffect, useState } from 'react';


import ReactTooltip from 'react-tooltip';
import useForm from 'web/hooks/useForm';
import localStorageList from 'web/hooks/useLocalStorage';
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
    const { register,  cleanForm, getResponse } = useForm();
    const [times, setTimes] = React.useState<{ number: number, color: string }[]>([]);
    const { tree } = useTreeStore();
    const [value, setValue] = useState<string | undefined>(undefined);
    
    let start: number = 0;
    let end: number = 0;

    const startCount = () => {
        start = performance.now();
    }

    const endCount = () => {
        end = performance.now();
        let newTime = end - start;
        let copyTimes = [...times];
        if (copyTimes.length > 4) {
            copyTimes.pop();
        }
        setTimes([{ number: newTime, color: getRandomColor() }, ...copyTimes]);
    }

    const handleindexedSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const data = getResponse();
        startCount(); 
        const value = tree.find(parseInt(data.key.value));
        endCount(); 
        setValue(value?.toString());
        cleanForm();
    }

    const handleSecuentialSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const arrayInMemory = new localStorageList("tree").getValues;
        const data = getResponse();
        startCount();
        for (let i = 0; i < arrayInMemory.length; i++) {
            if (parseInt(arrayInMemory[i].key) === parseInt(data.key.value)) {
                endCount();
                setValue(arrayInMemory[i].value);
                cleanForm();
                console.log("VALUES")
                console.log(parseInt(arrayInMemory[i].key));
                console.log(parseInt(data.key.value));
                return;
            }
        }
        endCount();
        setValue(undefined);
    }

    return <ReactTooltip place="right" type="dark" id="buscar" clickable effect='solid' delayHide={250} >
        <div style={{
            padding: '10px',
            borderRadius: '5px',
            width: '450px',
        }}>
            <form>
                <Input type="text" ref={register} label={"Key"} name="key" required />
                <TimeBox times={times} />
                <h3 style  = {{color: 'mediumseagreen'}}> VALOR:  {value  ? value : 'no encontrado'}  </h3>
                <Button onClick = {handleindexedSearch}>Buscar (indexada)</Button>
                <Button onClick = {handleSecuentialSearch}>Buscar (no indexada)</Button>
            </form>
        </div>
    </ReactTooltip> 
}
export default Buscar;