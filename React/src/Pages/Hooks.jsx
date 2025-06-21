import React from 'react'
import { useState } from 'react';
const State = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div style={{ width: "200px", padding: "20px", backgroundColor: "lightblue", display: "flex", flexDirection: "column", justifyContent: "center", border: "2px doubled black", margin: "10px" }}>
            <h1 style={{ textAlign: "center" }}>{count}</h1>
            <button style={{ margin: "10px", padding: "10px", border: "none", borderRadius: "10px", backgroundColor: "lightpink" }} onClick={increment}>Increment</button>
            <button style={{ margin: "10px", padding: "10px", border: "none", borderRadius: "10px", backgroundColor: "lightpink" }} onClick={decrement}>Decrement</button>
            <button style={{ margin: "10px", padding: "10px", border: "none", borderRadius: "10px", backgroundColor: "lightpink" }} onClick={reset}>Reset</button>

        </div>
    )
}

export default State