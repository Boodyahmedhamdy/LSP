import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


const UpdateBook = () => {
    return (
        <div className="login-container">
      <h1>Update Book</h1>
      <Alert variant="info">This is an Alert</Alert>
      <Alert variant="danger">This is an Alert</Alert>
      <Form>
      <Form.Group className="mb-3" >
          <input type="file" className="form-control" />
        </Form.Group>
        
        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Book Title" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <textarea className="form-control" placeholder="Description" rows={5}></textarea>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Book Author" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Category" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="ISBN" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Ranck Number" />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn btn-dark w-30">
          Update Book
        </Button>
      </Form>
    </div>
    );
};

export default UpdateBook;