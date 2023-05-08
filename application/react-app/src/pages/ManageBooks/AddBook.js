import React,{ useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from 'axios';
import Header from "../../shared/Header";
const localStorage =require("../../helper/Local_storage")

const AddBook = () => {
  const auth = localStorage.getAuthUser();
  const [book ,setBook]=useState({
    name: "",
    author_name :"",
    isbn :"",
    catigory_id:"",
    rack_number :"",
    err: null,
    loading: false,
    success : null
  })

  const image =useRef(null);

  const createBook=(e)=>{
    e.preventDefault();
    setBook({...book, loading: true})
    
    const formData = new FormData();
    formData.append("name", book.name)
    formData.append("author_name", book.author_name)
    formData.append("isbn", book.isbn)
    formData.append("catigory_id", book.catigory_id)
    formData.append("rack_number", book.rack_number)
    if (image.current.files && image.current.files[0]) {
      formData.append("image_url", image.current.files[0]);
    }

    axios.post("http://localhost:4000/books",formData,{
      headers :{
        token: auth.token,
        "Content-Type":"multipart/form-data"
      }
    })
    .then((res) => {
      setBook({    
      name: "",
      author_name :"",
      isbn :"",
      catigory_id:"",
      rack_number :"",
      err: null,
      loading: false,
      success : "book created successfully !"
      })
      image.current.files =null;
    })
    .catch((error)=>{
      setBook({    
        ...book,
        loading: false,
        success : null,
        err : "something went wrong !"
        })
    })
  }

  return (
    <div className="login-container">
      <h1>Add New Book</h1>

      {book.err &&(
        <Alert variant="info">{book.err}</Alert>
      )}

      {book.success &&(
        <Alert variant="success">{book.success}</Alert>
      )}

      <Form onSubmit={createBook}>
        <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          value={book.name} 
          onChange={(e)=>setBook({...book, name:e.target.value})}
          type="text" placeholder="Book Title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          value={book.author_name} 
          onChange={(e)=>setBook({...book, author_name:e.target.value})}
          type="text" placeholder="Book Author" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          value={book.catigory_id} 
          onChange={(e)=>setBook({...book, catigory_id:e.target.value})}
          type="text" placeholder="Category" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          value={book.isbn} 
          onChange={(e)=>setBook({...book, isbn:e.target.value})}
          type="text" placeholder="ISBN" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
          value={book.rack_number} 
          onChange={(e)=>setBook({...book, rack_number:e.target.value})}
          type="text" placeholder="Ranck Number" />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn btn-dark w-30">
          Add New Book
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
