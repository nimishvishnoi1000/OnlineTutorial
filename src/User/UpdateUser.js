import React, { useEffect, useState } from 'react'
import AllUsers from './AllUsers'
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Input, Label, FormGroup, Button } from 'reactstrap';



const UpdateUser = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [element , setUpdateUser]=useState({})

    useEffect(()=>{

        setUpdateUser(location.state.element)
    },[])

    const onChangeHandler=(e)=>{

        setUpdateUser({...element , [e.target.name]:e.target.value})

    }


    const clickHandler=async()=>{

        const requestOptions={

            'method':'PUT',

            'body':JSON.stringify({

                name:element.name, email:element.email, password: element.password, Address1:element.address1,
                Address2:element.address2, Mobile:element.mobile, dateOfBirth:element.dateOfBirth, 
                dateOfRegisteration: element.DateOfRegisteration

             }),

             'headers':{"Content-type":"application/json"}          

        }

        const data=await fetch(`http://localhost:5000/user/${element.id}`, requestOptions)

        const response =await data.json();

        navigate("/AllUsers")

    }

   

   

  return (
    <Container>

            <Form >

                <FormGroup ><br/>

                    <Label for="name" >Name</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="name"

                        name="name"

                        type="text"

                        value={element.name}
                        onChange={onChangeHandler}


                    />

                </FormGroup>

                <FormGroup >

                    <Label for="email" >Email</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="email"

                        name="email"

                        type="text"

                        value={element.email}
                        onChange={onChangeHandler}


                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Password" >Password</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="Password"

                        name="Password"

                       
                        onChange={onChangeHandler}
                        value={element.password}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Address1" >Address1</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="Address1"

                        name="Address1"

                        type="Address1"

                        value={element.address1}
                        onChange={onChangeHandler}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Address2" >Address2</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="Address2"

                        name="Address2"

                        type="Address2"

                        value={element.address2}
                        onChange={onChangeHandler}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Mobile" >Mobile</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="Mobile"

                        name="Mobile"

                        type="Mobile"

                        value={element.mobile}
                        onChange={onChangeHandler}
                    />

                </FormGroup>


                <FormGroup >

                    <Label for="dateOfBirth" >Date Of Birth</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="dateOfBirth"

                        name="dateOfBirth"

                        value={element.dateOfBirth}
                        onChange={onChangeHandler}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="DateOfRegisteration" >Date Registered</Label>

                    <Input style={{ width: '30%', float: "right" }}

                        id="DateOfRegisteration"

                        name="DateOfRegisteration"                 

                        value={element.dateOfRegisteration}
                        onChange={onChangeHandler}

                    />

                </FormGroup>

                <Button color="success" onClick={clickHandler}>
    
                        Submit
    
                    </Button>

            </Form>

        </Container>
  )
}

export default UpdateUser