import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import AdminService from "../../services/AdminService";
import Table from "react-bootstrap/Table";
export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await AdminService.getAllUser();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await AdminService.deleteUser(id);
    getUsers();
  };

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getUsers}>
          Refresh List
        </Button>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User</th>
            <th>Address</th>
            <th>Date Of Birth</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.user}</td>
                <td>{doc.address}</td>
                <td>{doc.dateOfBirth}</td>
                <td>{doc.mobileNo}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="delete"
                    onClick={(e) => {
                      deleteHandler(doc.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/admin">Back to dashboard</Link>
    </>
  );
}
