import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Registration = () => {
  return (
    <div className="login-container">
      <h1 className="mb-5">Registration Form</h1>
      <Alert variant="danger">This is an Alert</Alert>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Control type="email" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="Password">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-dark w-100">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
