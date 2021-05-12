import React from "react";
import classes from './Counter.module.css'

export type CounterType = {
    value: number
    incValue: () => void
    resetValue: () => void
}

export function Counter(props: CounterType) {
    return (
        <div className={classes.wrapper}>
            <input value={props.value} className={props.value === 5 ? classes.displayWarning : classes.display}/>
            <div className={classes.buttonWrapper}>
                <button onClick={props.incValue} disabled={props.value === 5}>Inc</button>
                <button onClick={props.resetValue}>Reset</button>
            </div>
        </div>
    )
}