import React, {ChangeEvent} from "react";
import classes from './Counter.module.css'
import {Button} from "./Button/Button";

export type CounterType = {
    maxValue: number
    minValue: number
    setLimits: () => void
    onChangeSetMinValue: (value: number) => void
    onChangeSetMaxValue: (value: number) => void

}

export function SetCounter(props: CounterType) {

    const onChangeSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSetMaxValue(Number(e.currentTarget.value))
    }
    const onChangeSetMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeSetMinValue(Number(e.currentTarget.value))
    }
    const setLimits = () => {
        props.setLimits()
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <input type="number" onChange={onChangeSetMaxValue} value={props.maxValue}/>
                <input type="number" onChange={onChangeSetMinValue} value={props.minValue}/>
            </div>
            <div className={classes.buttonWrapper}>
                <Button title={'Set'}
                        onClick={setLimits}
                        disabled={props.minValue < 0 || props.minValue >= props.maxValue}
                />
            </div>
        </div>
    )
}