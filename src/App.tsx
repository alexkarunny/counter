import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SetCounter} from "./Counter/SetCounter";

function App() {

    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)



    useEffect(() => {
        let storageValueAsString = localStorage.getItem('value')
        if(storageValueAsString) {
            let storageValue = JSON.parse(storageValueAsString)
            setValue(storageValue)
        }
        let storageMinimumValueAsString = localStorage.getItem('minimumValue')
        if (storageMinimumValueAsString) {
            let storageMinimumValue = JSON.parse(storageMinimumValueAsString)
            setMinValue(storageMinimumValue)
        }
        let storageMaximumValueAsString = localStorage.getItem('maximumValue')
        if (storageMaximumValueAsString) {
            let storageMaximumValue = JSON.parse(storageMaximumValueAsString)
            setMaxValue(storageMaximumValue)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('minimumValue', JSON.stringify(minValue))
        localStorage.setItem('maximumValue', JSON.stringify(maxValue))
    }, [value, minValue, maxValue])

    const incValue = () => {
        setValue(value + 1)

    }

    const resetValue = () => {
        setValue(minValue)
    }

    const setLimits = () => {
        setValue(minValue)
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
