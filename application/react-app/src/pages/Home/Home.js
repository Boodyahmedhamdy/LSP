import React, { useEffect, useState, } from "react";
import BookCard from "../../components/Book_card";
import Search from "../../components/Search";
import axios from 'axios';

const Home = () => {
  const [books ,setBooks]=useState({
    loading : true , // loader until it finish
    results: [],     // list of books from back_end
    err: null,
    reload : 0
  });

  useEffect(() => {
    setBooks({...books, loading :true});
    axios.get("http://localhost:4000/books")
    .then((res) => {
      setBooks({...books,results: res.data,loading :false, err:null});
    })
    .catch((error)=>{
      setBooks({...books,loading :false,err:"somthing went wrong"})
    })
  },[])

  return (
    <div className="p-5">
      {/*Search*/}
      <Search />
      {/*list books*/}
      <div className="row">
        {
          books.results.map((book)=>(
          <div className="col-2 book-card">
          <BookCard
            key = {book.id}
            Title={book.name} 
            Author={book.author_name} 
            Rack number={book.rack_number}
            image = {book.image_url}
            id={book.id}
          />
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
