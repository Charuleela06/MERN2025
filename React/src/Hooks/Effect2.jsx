import React,{useInsertionEffect,useState} from 'react';
import { data } from 'react-router-dom';

const Effect2 = () => {
    const [user, setUser] = useState();
    
    userEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => (res.json()))
            .then((data) => setUser(data))

    )};


    return (
        <div>
            <ol>
                {user.map((data)=>{
                    <li></li>
                })}
            </ol>
        
        </div>
    );
}

export default Effect2;