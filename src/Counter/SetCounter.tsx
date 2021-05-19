import React from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    value: number
    maxValue: number
    incStartValue: () => void
}

export function SetCounter(props: CounterType) {
    return (
        <div className={classes.wrapper}>
            <div>
                <input type="number"  placeholder={props.maxValue.toString()}/>
                <input type="number"  onChange={props.incStartValue}/>
            </div>
            <div className={classes.buttonWrapper}>
                <Button title={'Set'}  value={props.value} onClick={() => {alert(props.value)}}/>
            </div>
        </div>
    )
}