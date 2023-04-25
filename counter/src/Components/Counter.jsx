import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function decrementCount(){
        setCount(prevCount => prevCount -1)
    }

    function incrementCount(){
        setCount(prevCount => prevCount +1)
    }

    return (
        <>
        <div>
        <button onClick={incrementCount}>+</button>
        <span> {count} </span>
        <button onClick={decrementCount}>-</button>
        </div>
        </>
    )
}

export default Counter