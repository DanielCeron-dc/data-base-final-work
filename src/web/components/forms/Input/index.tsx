import React, {  useState } from 'react';
import { forwardRef } from 'react';

import classes from "./_.module.css";

export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    ref: React.ForwardedRef<HTMLInputElement>
}


const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
    const [valid, setValid] = useState(true); //!this is just for styling purposes
    const [isEmpty, setIsEmpty] = useState(true);  //!this is just for styling purposes

    const propsToPass = { ...props, ref };
    delete propsToPass.label;
    delete propsToPass.onChange;
    delete propsToPass.className;

    return (<div className={classes.base} style={props.style}>
        <input
            {...propsToPass}
            className={`${classes.input} ${!isEmpty ? classes.notEmpty : ""} `}
            onChange={(e) => {
                const isValid = e.currentTarget.checkValidity();
                setValid(isValid);
                setIsEmpty(e.currentTarget.value.length === 0);
                props.onChange && props.onChange(e);
            }}
        />
        <label className={`${classes.label} ${valid ? "" : classes.invalid}`} >
            <span className={`${classes.span}`} >
                {props.label}
            </span>
        </label>
    </div>
    );

});



export default React.memo(Input);