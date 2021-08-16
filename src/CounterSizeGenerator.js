import {useState} from "react";

function CounterSizeGenerator(props) {
 const [number, setNumber] = useState(props.counterSize);

    function handleChangeSize(e) {
        console.log(props);
        console.log(e.target.value);
        setNumber(parseInt(e.target.value));
        props.updateCounterSize(parseInt(e.target.value));
    }

    return(
        <div>
            <span><strong>Size: </strong></span>
            <input type="number" min="0" value={number} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;