import React from "react";
import "../../css/BookInfo.css";
import Search from "../../components/Search";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const BookInfo = () => {
  const borrow = () => {};
  return (
    <div>
      {/* Serach */}
      <div className="py-5">
        <Search />
      </div>
      {/* Overview */}
      <div className="row">
        <div className="col-3">
          <img
            className="px-5 book-img"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
        <div className="col-9">
          <h2>Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Button onClick={borrow} size="lg" variant="dark">
            Borrow
          </Button>
        </div>
      </div>
      {/* Information */}
      <div>
        <hr />
        <h5 className="text-center text-white bg-dark p-2">Information</h5>
        <div>
          <Table striped bordered hover variant="dark" className="mx-auto w-50">
            <tbody>
              <tr>
                <td>Title :</td>
                <td>Book Title</td>
              </tr>
              <tr>
                <td>Author :</td>
                <td>Author name</td>
              </tr>
              <tr>
                <td>Category :</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>ISBN :</td>
                <td>5486948394</td>
              </tr>
              <tr>
                <td>Rack number :</td>
                <td>5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
