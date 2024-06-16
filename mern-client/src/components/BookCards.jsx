import React from "react";

const BookCards = ({ books, headline }) => {
  return (
    <div className="my-12 px-4 lg:px-24">
      {/* Heading */}
      <h1 className="text-4xl text-centre font-bold text-black my-5">
        {headline}
      </h1>

      {/* Books */}
      <div className="flex flex-row gap-8">
        {books.map((book, index) => (
          <div className="w-60 flex flex-col">
            <img className="" src={book.imageURL} alt={book.bookTitle} />
            <h1 className="text-2xl text-centre font-bold text-black">
              {book.bookTitle}
            </h1>
            <p>{book.bookDescription}</p>
            <a href={book.bookPDFURL}>Read here</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
