import React from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    value: number
    maxValue: number
    minValue: number
    incValue: () => void
    resetValue: () => void

}

export function Counter(props: CounterType) {
    return (
        <div className={classes.wrapper}>
            <input value={props.minValue >= 0 ? props.value : 'incorrect value'}
                   className={props.value === props.maxValue ? classes.displayWarning : classes.display}
            />
            <div className={classes.buttonWrapper}>
                <Button title={'Inc'} onClick={props.incValue} disabled={props.value === props.maxValue}/>
                <Button title={'Reset'} onClick={props.resetValue} />
            </div>
        </div>
    )
}