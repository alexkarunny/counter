import React from "react";

export type CounterType = {
    value: number
    incValue: () => void
    resetValue: () => void
}

export function Counter(props: CounterType) {
    return (
        <div>
            <input value={props.value}/>
            <button onClick={props.incValue} disabled={props.value === 5}>Inc</button>
            <button onClick={props.resetValue}>Reset</button>
        </div>
    )
}