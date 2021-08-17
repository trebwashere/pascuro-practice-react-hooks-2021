import {useState} from "react";
import Counter from "./Counter";

function CounterGroup(props) {

    function generateCounterList() {
        return new Array(props.counterSize).fill(Date.now());
    }
    
    const counterList = generateCounterList();

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}/>
            ))}
            <div><h2>Total number of counters: {props.counterSize}</h2></div>
        </div>
    );
}

export default CounterGroup;