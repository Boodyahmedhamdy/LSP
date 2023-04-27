import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import backgroundImage from "../../Assets/LibraryHall.jpg";
import "../../css/Login.css";
import "../../css/Fonts.css";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="login-container p-5">
        <h1
          className="mb-5 text-center text-white"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Login Form
        </h1>
        <Alert variant="danger">This is an Alert</Alert>
        <Form>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="Password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="btn btn-dark "
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
