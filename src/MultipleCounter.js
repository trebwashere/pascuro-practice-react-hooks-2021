import {useState} from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import logo from './hamster.gif'

function MultipleCounter() {
    const [counterSize, setCounterSize] = useState(5);

    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);
    }
    return(
        <body>
        <div class="App">
            <h1>Counter Generator</h1>
            <div class="container">
                <CounterSizeGenerator updateCounterSize={updateCounterSize} counterSize={counterSize}></CounterSizeGenerator>
                <CounterGroup counterSize={counterSize}></CounterGroup>
            </div>
        </div>
        <h2 class="hamster-text">Please give 100 points for dancing hamster :)</h2>
        <img src={logo} class="hamster"></img>
        </body>

    );
}



export default MultipleCounter;