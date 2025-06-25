import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div style={{ width: "200px", padding: "20px", backgroundColor: "lightblue", display: "flex", flexDirection: "column", justifyContent: "center", border: "2px doubled black", margin: "10px" }}>
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={() => setcount(count + 1)}>Increment</button>
      <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={() => setcount(count - 1)}>Decrement</button>
      <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={() => setcount(0)}>Reset</button>
    </div>

  )
}

export default Counter