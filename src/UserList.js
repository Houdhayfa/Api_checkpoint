import React from 'react'
import Axios from 'axios'
import {useState,useEffect} from 'react'
import User from './User'
function UserList() {
   const [userList,setUserList]=useState([])
   
   useEffect(() => {
    const fetchUsers= async()=>{
        const res=await Axios.get('https://jsonplaceholder.typicode.com/users')
        setUserList(res.data)   
    }
       fetchUsers();
       
       
   }, [])
    return (
        <div className="list">
         {userList.map((user)=>{
             return <User key={user.id}
                   id={user.id}
                   name={user.name}
                   username={user.username}
                   email={user.email}
                   address={user.address}
                   phone={user.phone}
                   website={user.website}
                   company={user.company}
                   />
         })} 
        </div>
    )
}

export default UserList
