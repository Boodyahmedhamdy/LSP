import React,{ useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from 'axios';
const localStorage =require("../../helper/Local_storage")

const ManageUsers = () => {
  const auth = localStorage.getAuthUser();
  const [users ,setUsers]=useState({
    loading : true , // loader until it finish
    results: [],     // list of books from back_end
    err: null,
    reload : 0
  })
  useEffect(() => {
    setUsers({...users, loading :true});
    axios.get("http://localhost:4000/users_accounts",{
      headers: {
        token: auth.token,
      },
    })
    .then((res) => {
      setUsers({...users,results: res.data,loading :false, err:null});
    })
    .catch((err)=>{
      setUsers({...users,loading :false,err:"somthing went wrong"})
    })
  },[users.reload])

  const rejectUser = (id) => {
    axios.delete("http://localhost:4000/users_accounts/" + id, {
        headers: {
          token: auth.token,
        },
      })
      .then((res) => {
        setUsers({ ...users, reload: users.reload + 1 });
      })
      .catch((err) => {});
  };

  const approveUser =(id) =>{
    axios.post("http://localhost:4000/users_accounts" ,{
      "user_id": id
    } ,
    {
        headers: {
          token: auth.token,
        },
      })
      .then((res) => {
        setUsers({ ...users, reload: users.reload + 1 });
      })
      .catch((err) => {});
  };

  return (
    <div className="ManageBooks p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center">Manage Users</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.results.map((user)=>(
            <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button className="btn btn-sm btn-danger mx-2" onClick={(e)=>{rejectUser(user.id)}}>Reject</button>
              <button className="btn btn-sm btn-info mx-2"onClick={(e)=>{approveUser(user.id)}}>Approve</button>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
