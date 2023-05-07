import React, { useEffect, useState, } from "react";
import "../../css/BookInfo.css";
import { useParams } from "react-router-dom";
import Search from "../../components/Search";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import axios from 'axios';

const BookInfo = () => {
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

  

  const borrow = () => {};

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
              <Button onClick={borrow} size="lg" variant="dark">
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
