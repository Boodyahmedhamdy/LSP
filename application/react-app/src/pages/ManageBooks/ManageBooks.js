import React from "react";
import Table from "react-bootstrap/Table";
import "../../css/ManageBooks.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../css/Search.css";
import { Container } from "react-bootstrap";

const ManageBooks = () => {
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
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="image-avatar"
              />
            </td>
            <td>Black Adam</td>
            <td>
              some quick example text to build on the card title and make up the
              bulk of the card's content.
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Delete</button>
              <Link to={"5"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info">
                Show
              </Link>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="image-avatar"
              />
            </td>
            <td>Black Adam</td>
            <td>
              some quick example text to build on the card title and make up the
              bulk of the card's content.
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Delete</button>
              <Link to={"5"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info">
                Show
              </Link>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="image-avatar"
              />
            </td>
            <td>Black Adam</td>
            <td>
              some quick example text to build on the card title and make up the
              bulk of the card's content.
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Delete</button>
              <Link to={"5"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info">
                Show
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBooks;
