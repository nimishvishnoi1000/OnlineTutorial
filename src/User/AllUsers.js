import React, { useEffect, useState } from 'react'
import {  Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const AllUsers = () => {

    const [user, setUser] = useState([])
    const navigate = useNavigate();

    
    const fetchUsers = async () => {

        const data = await fetch("http://localhost:5000/user")
        const parsedData = await data.json()
        setUser(parsedData)
      
    }

    useEffect(() => {

        fetchUsers()

    }, [])

    const deleteuser = async (id)=> {
        const data = await fetch(`http://localhost:5000/user/${id}`, {method:'delete'})
        const response = await data.json()
        fetchUsers();
    }

    const FetchuserbyIdView = async (id)=> {
        const data = await fetch(`http://localhost:5000/user/${id}`)
        const response =await data.json()
        
        fetchUsers();
        navigate("/ViewUser", {state:{element:response}});
    }

    const FetchuserbyIdUpdate = async (id)=> {
        const data = await fetch(`http://localhost:5000/user/${id}`)
        const response =await data.json()
        
        fetchUsers();
        navigate("/UpdateUser", {state:{element:response}});
    }


  return (
    <div><h2 style={{margin:'7px' }}>All Users</h2>
    <br/>    
    <h3 style={{margin:'4px' }}>Total Users: {Object.keys(user).length}</h3>
    <Table hover  style={{margin:'15px' }}>
        <thead>
        <tr>
      <th>Name</th>
      <th>Mobile</th>
      <th>Email</th>
      <th></th>
      <th colSpan={3}>Click an Action to Perform</th>
        </tr>
        </thead>
        <tbody>
    {user.map((element)=>{
        return  <tr>
                <td>{element.name} </td>
                <td>{element.mobile}</td>
                <td>{element.email}</td>
                <td>|</td>
                <td ><Button onClick={()=>FetchuserbyIdView(element.id)} >View</Button></td>
                <td ><Button variant='warning' onClick={()=>FetchuserbyIdUpdate(element.id)} >Update</Button></td>
                <td ><Button variant='danger' onClick={()=>deleteuser(element.id)}>Delete</Button></td>
                 </tr>
                })}
        </tbody>
</Table></div>
  )
}

export default AllUsers