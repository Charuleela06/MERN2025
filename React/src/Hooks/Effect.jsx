import React, { useState, useEffect } from 'react';
const Effect = () => {
    const [user, setUser] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [])
    useEffect(() => {
        setTimeout(() =>
            setCount(count+5),1000) //1000 is denote 1 second so per second the count is increasing automatically based on the time
    }, [count])
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
        <center><div style={{width:"300px",height:'auto',backgroundColor:"gray" ,textAlign:'left',margin:"100px",borderRadius:"10px"}}>
            <ol>
                {user.map((data) => (
                    <>
                        <p  style={{margin:"10px"}} key={data.id}>ID:{data.id}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Name:{data.name}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Email:{data.email}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Username:{data.username}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Street:{data.address.street}</p>
                        <p  style={{margin:"10px"}}key={data.id}>City:{data.address.city}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Zipcode:{data.zipcode}</p>
                        <p  style={{margin:"10px"}}key={data.id}>Longitude:{data.address.geo.lng}</p><br />
                    </>


                ))}
            </ol>
        </div></center>
        // <div style={{width:"200px", padding:"20px",backgroundColor:"lightblue",display:"flex", flexDirection:"column",justifyContent:"center",border:"2px doubled black",margin:"10px"}}>
        //     <h1 style={{textAlign:"center"}}>{count}</h1>
        //     <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={increment}>Increment</button>
        //     <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={decrement}>Decrement</button>
        //     <button style={{margin:"10px",padding:"10px",border:"none",borderRadius:"10px",backgroundColor:"lightpink"}} onClick={reset}>Reset</button>



        // </div>
    )
}

export default Effect 