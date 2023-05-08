import React, { useEffect, useState, } from "react";
import "../../css/BookInfo.css";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import axios from 'axios';
const localStorage =require("../../helper/Local_storage")



const BookInfo = () => {
  const auth = localStorage.getAuthUser()
  let { id } = useParams();
  const [book ,setBook]=useState({
    loading : true , // loader until it finish
    result: null,     // list of books from back_end
    err: null,
  });

  useEffect(() => {
    setBook({...book, loading :true});
    axios.get("http://localhost:4000/books/" + id)
    .then((res) => {
      console.log(res);
      setBook({...book,result: res.data,loading :false, err:null});
    })
    .catch((error)=>{
      setBook({...book,loading :false,err:"somthing went wrong"})
    })
  },[]);

  const borrow = (user_id,book_id) => {
      let data = JSON.stringify({
        "user_id": user_id,
        "book_id": book_id,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/borrowing_request',
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
    // axios.delete("http://localhost:4000/books/" + id, {
    //     headers: {
    //       token: auth.token,
    //     },
    //   })
    //   .then((res) => {
    //     setBooks({ ...books, reload: books.reload + 1 });
    //   })
    //   .catch((err) => {});
  };

  return (
    <div>
      {/* Serach */}
      {/* Information */}
      <div>
        <hr />
        <h5 className="text-center text-white bg-dark p-2">Information</h5>
      </div>
      {book.loading === false && book.err==null &&(
        <>
          {/* Overview */}
          <div className="row">
            <div className="col-3">
              <img
                className="px-5 book-img"
                src={book.result.image_url}
                alt={book.result.name}
              />
            </div>
            <div className="col-9">
              <div>
                <Table striped bordered hover variant="dark" className="mx-auto w-50">
                  <tbody>
                    <tr>
                      <td>Title :</td>
                      <td>{book.result.name}</td>
                    </tr>
                    <tr>
                      <td>Author :</td>
                      <td>{book.result.author_name}</td>
                    </tr>
                    <tr>
                      <td>Category :</td>
                      <td>{book.result.catigory_id}</td>
                    </tr>
                    <tr>
                      <td>ISBN :</td>
                      <td>{book.result.isbn}</td>
                    </tr>
                    <tr>
                      <td>Rack number :</td>
                      <td>{book.result.rack_number}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button onClick={(e)=>{borrow(auth.id,book.result.id)}} size="lg" variant="dark">
                Borrow
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookInfo;
