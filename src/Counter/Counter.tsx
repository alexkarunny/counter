import React from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    value: number
    incValue: () => void
    resetValue: () => void
    maxValue: number
}

export function Counter(props: CounterType) {
    return (
        <div className={classes.wrapper}>
            <input value={props.value} className={props.value === props.maxValue ? classes.displayWarning : classes.display}/>
            <div className={classes.buttonWrapper}>
                <Button title={'Inc'} onClick={props.incValue} value={props.value} disabled={props.value === props.maxValue}/>
                <Button title={'Reset'} onClick={props.resetValue} value={props.value} />
            </div>
        </div>
    )
}