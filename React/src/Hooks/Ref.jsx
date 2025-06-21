import React, {useEffect, useRef,useState} from 'react'

const Ref = () => {
    const [count,SetCount] = useState(0);
    const value = useRef(0);
    useEffect(()=>{
        SetTimer(()=>{
            value.current=value.current+1
        },2000)
    })
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <h1>{value.current}</h1>
    </div>
  )
}

export default Ref