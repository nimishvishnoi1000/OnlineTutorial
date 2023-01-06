import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewCategory = () => {
    const [categoryData, setCategoryData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/category").then((res) => {
            return res.json();
        }).then((resp) => {
            setCategoryData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const LoadEdit = (id) => {
        navigate("/category/updateCategory/" + id);
    }

    const Removefunction = (categoryid) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/category/" + categoryid, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Category List</h2>
                    <div className="card-body">
                        <div className="divbtn">
                            <Link to="/category/createCategory" className="btn btn-success">Add Category (+)</Link>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {categoryData &&
                                        categoryData.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                                <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>                                       
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCategory