import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const[users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.come/users")
        .then((res)=>res.json())
        .then((data)=>setUsers())

    },[])
  return (
    <div>
        <h2>Contact</h2>
        <ul>
            {users.map((user)=>(
            <li key={user.id}>
                <Link to={`${user.id}`}>{user.name}</Link>


            </li>))}

        </ul>
        
    </div>
  )
}

export default Contact