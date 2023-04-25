import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Book_card.css";
import { Link } from "react-router-dom";

const Book_card = () => {
  return (
    <div className="py-2">
      <Card>
        <Card.Img
          className="card_img"
          variant="top"
          src="https://picsum.photos/200/300"
        />
        <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
          <Link className="btn btn-dark w-100" to={"/5"}>
            Show info
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book_card;
