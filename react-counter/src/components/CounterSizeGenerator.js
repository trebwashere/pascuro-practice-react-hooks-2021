import {useState} from "react";

function CounterSizeGenerator(props) {
 const [number, setNumber] = useState(props.counterSize);

    function handleChangeSize(e) {
        if (e.target.value) {
            setNumber(parseInt(e.target.value));
            props.updateCounterSize(parseInt(e.target.value));
        } else {
            setNumber(parseInt(0));
            props.updateCounterSize(parseInt(0));
        }

    }

    return(
        <div>
            <span><strong>Size: </strong></span>
            <input type="number" min="0" value={number} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;