import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/Search.css";
import { Container } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <div className="Search">
          <InputGroup className="mb-3">
            <Form.Control type="text" placeholder="Search" />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </div>
      </Container>
    </>
  );
};

export default Search;
