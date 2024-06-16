import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const FavouriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavouriteBooks;
