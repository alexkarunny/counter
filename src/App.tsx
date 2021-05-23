import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./Counter/SetCounter";

function App() {

    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    const incValue = () => {
        setValue(++value)
    }

    const resetValue = () => {
        setValue(minValue)
    }

    const setLimits = () => {
        localStorage.setItem('minimalValue', JSON.stringify(minValue))
        localStorage.setItem('maximumValue', JSON.stringify(maxValue))
        let minimalValue = localStorage.getItem('minimalValue')
        if (minimalValue) {
            let newMinimalValue = JSON.parse(minimalValue)
            setValue(newMinimalValue)
        }

    }

    const onChangeSetMinValue = (value: number) => {
        setMinValue(value)
    }
    const onChangeSetMaxValue = (value: number) => {
        setMaxValue(value)
    }
    return (
        <div>
            <SetCounter maxValue={maxValue}
                        minValue={minValue}
                        setLimits={setLimits}
                        onChangeSetMinValue={onChangeSetMinValue}
                        onChangeSetMaxValue={onChangeSetMaxValue}
            />
            <Counter value={value}
                     minValue={minValue}
                     maxValue={maxValue}
                     incValue={incValue}
                     resetValue={resetValue}
            />
        </div>

    )
}

export default App;
