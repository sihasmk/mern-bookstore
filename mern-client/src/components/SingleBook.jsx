import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-16">
      <img src={imageURL} alt={bookTitle} className="h-96 mb-8" />
      <h1 className="text-4xl font-bold text-black"> {bookTitle} </h1>
    </div>
  );
};

export default SingleBook;
