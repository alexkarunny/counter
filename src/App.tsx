import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

    let [value, setValue] = useState<number>(0)

    const incValue = () => {
        setValue(++value)
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <div>
            <Counter value={value} incValue={incValue} resetValue={resetValue} />
        </div>

    )
}

export default App;
