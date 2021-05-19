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
        setValue(0)
    }



    return (
        <div>
            <SetCounter value={value} maxValue={maxValue} incStartValue={incValue}/>
            <Counter value={value} maxValue={maxValue} incValue={incValue} resetValue={resetValue} />
        </div>

    )
}

export default App;
