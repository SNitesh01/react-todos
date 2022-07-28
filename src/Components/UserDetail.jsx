import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const UserDetail = ({user}) => {

   
  
    
   

  return (
    <div style={{border: "1px solid black"}}>
        <ul className='list-group '>
            <li className='list-group-item'>name: {user?.name}</li>
            <li className='list-group-item'>email: {user?.email}</li>
        </ul>
   
    </div>
  )
}

export default UserDetail