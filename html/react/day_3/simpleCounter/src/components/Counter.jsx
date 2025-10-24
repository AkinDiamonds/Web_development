import { useState } from "react";
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    };

    function decrement() {
        if (!count){
            setCount(0)
        }
        else{setCount(prevCount => prevCount - 1)}
    };
    function reset() {
        setCount(0)
    };

    return(
        <div className="overall-container">
            <div className="count">{count}</div>
            <div className="buttons">
                <button onClick={increment}>Increment (+)</button>
                <button onClick={decrement}>Decrement (-)</button>
                <button onClick={reset}>Reset(0)</button>
            </div>
        </div>
    )
}

export default Counter