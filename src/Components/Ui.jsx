import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Table, Form } from "react-bootstrap"
import axios from 'axios';
import UserDetail from './UserDetail';
import { Link } from 'react-router-dom'
import { sorting } from '../Common/utils';


function Ui() {
  
    
    const [Todos, setTodos] = useState(null);
    const [userDetails, setUserDetails] = useState(null)

    const [sortby, setSortby] = useState("id")
    const [isAss, setisAss] = useState(1);
    const [sortDataType, setSortDataType] = useState("number")
  
    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/todos").then(res => {
       setTodos(res.data);

      })
     
    }, [])

    const handleUserDetails = (id) => { 
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setUserDetails(res.data))

     }

    let Todoss = Todos && sorting(Todos, sortby, sortDataType, isAss);
   // console.log(Todos)

   const handleSort = (col, type) =>{
    setSortby(col)
    setSortDataType(type)
  }

  return (
    <div className='mt-5'>
 <Container >
   <Row>
       <Col>
       <Col className='d-flex'> <h4>Todos </h4>
       <Form className=" mb-2" style={{marginLeft:'40%', width:'700px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /></Form>
       
       </Col>
        
       

    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th onClick={() => handleSort ('id', 'number')} scope="col">ToDo Id</th>
          <th onClick={() => handleSort ('title', 'string')} scope="col">Title</th>
          <th onClick={() => handleSort ('completed', 'boolean')} scope="col">Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {Todoss?.map(to=>(
          
        <tr key={to.id}>
        <td>{to.id}</td>
        <td>{to.title}</td>
        <td>{to.completed ? "Completed" : "Incompleted"}</td>
        <td> 
          <button className="btn btn-primary mr-2" onClick={()=>handleUserDetails(to.id)} >View</button>
        </td>
        </tr>
     
      ))}
      </tbody>
    </Table>
 </Col>

    <Col>
      <h4>User Detail</h4>
      <UserDetail user={userDetails}/>
    </Col>
   </Row>
 </Container>

    </div>
  )
}

export default Ui