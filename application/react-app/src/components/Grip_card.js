import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Grip_card = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/200/300"
              className="card-img"
            />
            <Card.Body>
              <Card.Title className="text-center">Card title</Card.Title>
              <Card.Text>Borrowing date : 25/4/2023</Card.Text>
              <Card.Text>you can borrow this book for 2 weeks.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Grip_card;
