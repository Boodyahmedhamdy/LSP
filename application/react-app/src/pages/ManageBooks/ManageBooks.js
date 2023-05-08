import React,{ useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../../css/ManageBooks.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../css/Search.css";
import { Container } from "react-bootstrap";
import axios from 'axios';
const localStorage =require("../../helper/Local_storage")


const ManageBooks = () => {
  const auth = localStorage.getAuthUser()
  const [books ,setBooks]=useState({
    loading : true , // loader until it finish
    results: [],     // list of books from back_end
    err: null,
    reload : 0
  })

  useEffect(() => {
    setBooks({...books, loading :true});
    axios.get("http://localhost:4000/books")
    .then((res) => {
      console.log(res);
      setBooks({...books,results: res.data,loading :false, err:null});
    })
    .catch((error)=>{
      setBooks({...books,loading :false,err:"somthing went wrong"})
    })
  },[books.reload])

  const deleteBook = (id) => {
    axios.delete("http://localhost:4000/books/" + id, {
        headers: {
          token: auth.token,
        },
      })
      .then((res) => {
        setBooks({ ...books, reload: books.reload + 1 });
      })
      .catch((err) => {});
  };

  return (
    <div className="ManageBooks p-5">
      <Container className="d-flex justify-content-center">
        <div className="Search">
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Filter Books" />
            <Button variant="outline-secondary">Filter</Button>
          </InputGroup>
        </div>
      </Container>
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center">Manage Books</h3>
        <Link to={"Add"} className="btn btn-success">
          Add New Book +
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
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
                <button className="btn btn-sm btn-danger"onClick={(e)=>{deleteBook(book.id)}}>Delete</button>
                <Link to={" "+book.id} className="btn btn-sm btn-primary mx-2">
                  Update
                </Link>
                <Link to={"/"+ book.id} className="btn btn-sm btn-info">
                  Show
                </Link>
              </td>
            </tr>

            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBooks;
