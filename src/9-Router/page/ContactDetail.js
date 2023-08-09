import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {

    const {id}=useParams();
    const[user,setUser]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then(data=>setUser(data))
    },[])
  return (
    <div>
        <h2>User Detail</h2>
        {user && (
            <>
            <pre>{JSON.stringify(user,null,2)}</pre>
            <p>{user.email}</p>
            </>
        )}
    </div>
  )
}

export default ContactDetail