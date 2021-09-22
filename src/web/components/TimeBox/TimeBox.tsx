import React, { CSSProperties, useEffect, useRef } from 'react';
import styles from './TimeBox.module.css';

type TimeBoxProps = {
    times: { number: number, color: string }[];
};


//generate a ramdom color rgba

const TimeBox: React.FC<TimeBoxProps> = (props) => {

    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // scroll to right
        //ref.current!.scrollLeft = ref.current!.scrollWidth;
    }, [props]); 

    return <div className  = {styles.base} ref = {ref} >
        {props.times.map((object) => {
            const style = { backgroundColor: object.color };
            return <div key={object.color} style={style} className = {styles.TimeBoxStyle}>
                <h2  style = {{margin: 0 , padding: 0}}>{object.number}</h2> <br/> Seg
            </div>
        })}
    </div> 
}
export default TimeBox;