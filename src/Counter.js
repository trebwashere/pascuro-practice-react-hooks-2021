import {useState} from "react";

function Counter(props) {
    const[count, setCount] = useState(0);

    function increase() {
        setCount(count+1);
    }

    function decrease() {
        setCount(count-1);
    }

    return(
    <div class="counters">
        <button onClick={increase}>+</button>
        <span class="span"><strong>{count}</strong></span>
        <button onClick={decrease}>-</button>
    </div>);
}

export default Counter;