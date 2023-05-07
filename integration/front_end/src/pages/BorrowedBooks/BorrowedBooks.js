import React from "react";
import Grip_card from "../../components/Grip_card";

const BorrowedBooks = () => {
  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <h4 className="text-center text-white bg-dark p-2">
          My current books : 5
        </h4>
      </div>
      <div className="row d-flex justify-content-center p-5">
        <div className="col-2 grip-card">
          <Grip_card />
        </div>
        <div className="col-2 grip-card">
          <Grip_card />
        </div>
        <div className="col-2 grip-card">
          <Grip_card />
        </div>
        <div className="col-2 grip-card">
          <Grip_card />
        </div>
        <div className="col-2 grip-card">
          <Grip_card />
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
