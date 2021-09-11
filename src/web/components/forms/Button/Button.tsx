import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'danger' | 'outline';
}

const Button: React.FC<ButtonProps> = (props) => {
    const propsToPass = { ...props };
    delete propsToPass.variant;
    return <button className={`${styles.button} ${props.variant && styles[props.variant]}`} {...propsToPass} >
        {props.children}
    </button>
}

export default Button;