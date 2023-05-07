import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Book_card = (props) => {
  return (
    <div>
      <Card>
        <Card.Img
          className="card_img"
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title> {props.Title} </Card.Title>
          <Link className="btn btn-dark w-100" to={"/"+ props.id}>
            Show info
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book_card;
