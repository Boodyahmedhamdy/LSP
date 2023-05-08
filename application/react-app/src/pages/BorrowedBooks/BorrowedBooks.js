import React,{ useState, useEffect } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
const localStorage =require("../../helper/Local_storage")
//import Grip_card from "../../components/Grip_card";



const BorrowedBooks = () => {
  const auth = localStorage.getAuthUser()
  const [books ,setBooks]=useState({
    loading : true , // loader until it finish
    results: [],     // list of books from back_end
    err: null,
    reload : 0
  })



  useEffect(()=>{
    setBooks({...books, loading :true});
    let data = JSON.stringify({
      "user_id": auth.id
    });

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/borrowing_request',
      headers: { 
        'token': auth.token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.request(config)
    .then((res) => {
      setBooks({...books,results:res.data, loading :false, err:null});
    })
    .catch((error) => {
      console.log(error);
      setBooks({...books,loading :false,err:"somthing went wrong"})
    });
  },[books.reload])


  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>

          {
            books.results.map((book)=>(
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <img
                  src={book.image_url}
                  alt=""
                  className="image-avatar"
                />
              </td>
              <td>{book.name}</td>
              <td>
                
              </td>
            </tr>

            ))
          }
        </tbody>
      </Table>
    // <div>
    //   <div className="d-flex justify-content-center m-5">
    //     <h4 className="text-center text-white bg-dark p-2">
    //       My current books : 5
    //     </h4>
    //   </div>
    //   <div className="row d-flex justify-content-center p-5">
    //     <div className="col-2 grip-card">
    //       <Grip_card />
    //     </div>
    //     <div className="col-2 grip-card">
    //       <Grip_card />
    //     </div>
    //     <div className="col-2 grip-card">
    //       <Grip_card />
    //     </div>
    //     <div className="col-2 grip-card">
    //       <Grip_card />
    //     </div>
    //     <div className="col-2 grip-card">
    //       <Grip_card />
    //     </div>
    //   </div>
    // </div>
  );
};

export default BorrowedBooks;
