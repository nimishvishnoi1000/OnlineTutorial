import React, { useEffect, useState } from 'react'
import AllUsers from './AllUsers'
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Input, Label, FormGroup, Button } from 'reactstrap';


const ViewUser = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [element, setUser] = useState({})

    useEffect(() => {

        setUser(location.state.element)
    }, [])

   
    return (
        <Container>

            <Form >

                <FormGroup ><br/>

                    <Label for="name" >Name</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="name"

                        name="name"

                        type="text"

                        value={element.name}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="email" >Email</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="email"

                        name="email"

                        type="email"

                        value={element.email}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Password" >Password</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="Password"

                        name="Password"

                       

                        value={element.password}

                    />

                </FormGroup>



                <FormGroup >

                    <Label for="Address1" >Address1</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="Address1"

                        name="Address1"

                        type="Address1"

                        value={element.address1}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Address2" >Address2</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="Address2"

                        name="Address2"

                        type="Address2"

                        value={element.address2}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="Mobile" >Mobile</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="Mobile"

                        name="Mobile"

                        type="Mobile"

                        value={element.mobile}

                    />

                </FormGroup>


                <FormGroup >

                    <Label for="dateOfBirth" >Date Of Birth</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="dateOfBirth"

                        name="dateOfBirth"

                        value={element.dateOfBirth}

                    />

                </FormGroup>

                <FormGroup >

                    <Label for="DateOfRegisteration" >Date Registered</Label>

                    <Input readOnly style={{ width: '30%', float: "right" }}

                        id="DateOfRegisteration"

                        name="DateOfRegisteration"                 

                        value={element.dateOfRegisteration}

                    />

                </FormGroup>

            </Form>

        </Container>
    )
}

export default ViewUser