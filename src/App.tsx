import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./Counter/SetCounter";

function App() {

    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)


    const incValue = () => {
        setValue(++value)
    }

    const resetValue = () => {
        setValue(value)
    }

    const setMaxLimit = (value: number) => {
        setMaxValue(value)
    }

    const setMinLimit = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <SetCounter value={value} maxValue={maxValue} setMinLimit={setMinLimit} setMaxLimit={setMaxLimit}/>
            <Counter value={value} maxValue={maxValue} incValue={incValue} resetValue={resetValue} />
        </div>

    )
}

export default App;
