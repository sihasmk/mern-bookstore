import React, { useState, useEffect } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.slice(10, 20));
      });
  }, []);

  return <BookCards books={books} headline="Other Books" />;
};

export default OtherBooks;
