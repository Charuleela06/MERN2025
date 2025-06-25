import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center",margin:"100px" ,alignItems:"center"}}>
        <Link style={{textDecoration:"none", color:"white", fontSize:"22px" , fontWeight:"bold", margin:"15px" , width:"120px", padding:"10px",background:"linear-gradient(65deg,black,gray)",borderRadius:"10px",textAlign:"center"}} to="/state">UseState</Link>
        <Link style={{textDecoration:"none", color:"white", fontSize:"22px" , fontWeight:"bold", margin:"15px",width:"120px", padding:"10px",background:"linear-gradient(65deg,black,gray)",borderRadius:"10px" ,textAlign:"center"}} to="/effect">UseEffect</Link>
        <Link style={{textDecoration:"none", color:"white", fontSize:"22px" , fontWeight:"bold", margin:"15px",width:"120px", padding:"10px",background:"linear-gradient(65deg,black,gray)",borderRadius:"10px" ,textAlign:"center"}} to="/ref">UseRef</Link>
        <Link style={{textDecoration:"none", color:"white", fontSize:"22px" , fontWeight:"bold", margin:"15px",width:"120px", padding:"10px",background:"linear-gradient(65deg,black,gray)",borderRadius:"10px" ,textAlign:"center"}} to="/reducer">UseReducer</Link>
        <Link style={{textDecoration:"none", color:"white", fontSize:"22px" , fontWeight:"bold", margin:"15px",width:"120px", padding:"10px",background:"linear-gradient(65deg,black,gray)",borderRadius:"10px" ,textAlign:"center"}} to="/context">UseContext</Link>
    </div>
  )
}

export default Hooks