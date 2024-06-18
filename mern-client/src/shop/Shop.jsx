import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import functions
import { truncateDescription } from "../functions/truncateDescription.js";

// Import Flowbite React components
import { Card } from "flowbite-react";
import { renderStars } from "./../functions/renderStars";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-black">
        All Books are Here!
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-10 my-12">
        {books.map((book) => (
          <Card
            key={book._id}
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={book.imageURL}
          >
            <Link to="">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
            </Link>

            <div className="flex items-center justify-between relative">
              <p>{truncateDescription(book.bookDescription, 200)}</p>
            </div>

            <Link>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm w-full">
                Shop Now
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
