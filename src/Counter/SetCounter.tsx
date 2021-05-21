import React, {ChangeEvent, useState} from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    value: number
    maxValue: number
    setMinLimit: (value: number) => void
    setMaxLimit: (value: number) => void
}

export function SetCounter(props: CounterType) {

    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [minValue, setMinValue] = useState<number>(0)

    const onChangeSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    const onChangeSetMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }
    const setLimits = () => {
        props.setMaxLimit(maxValue)
        props.setMinLimit(minValue)
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <input type="number" onChange={onChangeSetMaxValue} value={maxValue}/>
                <input type="number" onChange={onChangeSetMinValue} value={minValue}/>
            </div>
            <div className={classes.buttonWrapper}>
                <Button title={'Set'}  value={props.value} onClick={setLimits}/>
            </div>
        </div>
    )
}