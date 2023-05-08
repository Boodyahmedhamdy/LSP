import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
const localStorage =require("../../helper/Local_storage")


const ManageBorrowingRequests = () => {
  const auth = localStorage.getAuthUser();
  const [borrowingRequests ,setborrowingRequests]=useState({
    loading : true , // loader until it finish
    results: [],     // list of books from back_end
    err: null,
    reload : 0
  })
  useEffect(() => {
    setborrowingRequests({...borrowingRequests, loading :true});
    axios.get("http://localhost:4000/admin_borrowing_request",{
      headers: {
        token: auth.token,
      },
    })
    .then((res) => {
      setborrowingRequests({...borrowingRequests,results: res.data,loading :false, err:null});
    })
    .catch((err)=>{
      setborrowingRequests({...borrowingRequests,loading :false,err:"somthing went wrong"})
    })
  },[borrowingRequests.reload])

  const rejectBorrowingRequest = (id) => {
    axios.delete("http://localhost:4000/admin_borrowing_request/reject",
    {data:{"req_id" : id},
    headers: {token: auth.token}
    })
    .then((res) => {
      setborrowingRequests({ ...borrowingRequests, reload: borrowingRequests.reload + 1 });
    })
    .catch((err) => {});
  };

  // const acceptBorrowingRequest =(req_id,book_id) =>{
  //   setborrowingRequests({...borrowingRequests,loading :true});
  //   axios.put("http://localhost:4000/admin_borrowing_request/accept" ,
  //   {data : {"req_id":req_id, "book_id":book_id}}
  //   ,{headers: {token: auth.token},'Content-Type' : 'application/json'}
  //   )
  //     .then((res) => {
  //       setborrowingRequests({ ...borrowingRequests, reload: borrowingRequests.reload + 1 });
  //     })
  //     .catch((err) => {});
  // };
  const acceptBorrowingRequest =(req_id,book_id) =>{
    let data = JSON.stringify({
      "req_id": req_id,
      "book_id": book_id
    });

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/admin_borrowing_request/accept',
      headers: { 
        'token': auth.token, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="ManageBooks p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center">Manage Borrowing Requests</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User id</th>
            <th>duration in days</th>
            <th>book id </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            borrowingRequests.results.map((borrowingRequest)=>(
            <tr key={borrowingRequest.id}>
              <td>{borrowingRequest.id}</td>
              <td>{borrowingRequest.user_id}</td>
              <td>{borrowingRequest.duration_in_days}</td>
              <td>{borrowingRequest.book_id}</td>
              <td>
                <button className="btn btn-sm btn-danger mx-2"
                onClick={(e)=>{rejectBorrowingRequest(borrowingRequest.id)}}>
                Reject
                </button>

                <button className="btn btn-sm btn-info mx-2" 
                onClick={(e)=>{acceptBorrowingRequest(
                borrowingRequest.id,borrowingRequest.book_id)}}>
                Approve
                </button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBorrowingRequests;
