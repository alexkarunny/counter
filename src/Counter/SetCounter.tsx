import React, {useRef} from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    value: number
    maxValue: number
    setMinLimit: (value: number) => void
    setMaxLimit: (value: number) => void
}

export function SetCounter(props: CounterType) {
    const maxInput = useRef<HTMLInputElement>(null)
    const minInput = useRef<HTMLInputElement>(null)

    const setLimits = () => {
        const elMax = maxInput.current as HTMLInputElement
        const elMin = minInput.current as HTMLInputElement
        props.setMaxLimit(+elMax.value)
        props.setMinLimit(+elMin.value)
    }
    return (
        <div className={classes.wrapper}>
            <div>
                <input type="number" ref={maxInput}/>
                <input type="number"  ref={minInput} />
            </div>
            <div className={classes.buttonWrapper}>
                <Button title={'Set'}  value={props.value} onClick={setLimits}/>
            </div>
        </div>
    )
}