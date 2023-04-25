import React from "react";
import Book_card from "../../components/Book_card";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="p-5">
      {/*Search*/}
      <Search />
      {/*list books*/}
      <div className="row">
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
        <div className="col-3 book-card">
          <Book_card />
        </div>
      </div>
    </div>
  );
};

export default Home;
