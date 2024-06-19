import React, { useEffect, useState } from "react";

// Flowbite React Components
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const columns = [
    "No.",
    "Book Name",
    "Author",
    "Category",
    "Book Description",
    "Price",
    "Cover Page Image URL",
    "Book PDF URL",
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    const oldBooks = books.slice();
    const newBooks = oldBooks.filter((book) => book._id !== id);
    setBooks(newBooks);

    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete response: ", data);
      })
      .catch((err) => {
        console.error("Delete error: ", err);
        setBooks(oldBooks);
      });
  };

  return (
    <div>
      <div className="px-4 my-12">
        <h2 className="text-3xl mb-8 font-bold text-black">
          Manage your Books
        </h2>
      </div>
      <div className="px-4 my-12 overflow-x-auto">
        <Table hoverable className="lg:w-[1080px]">
          <Table.Head>
            {columns.map((column) => (
              <Table.HeadCell className="whitespace-nowrap" key={column}>
                {column}
              </Table.HeadCell>
            ))}
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {books.map((book, index) => (
              <Table.Row
                key={book._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>
                  <p className="w-[200px] h-[120px] overflow-auto">
                    {book.bookDescription}
                  </p>
                </Table.Cell>
                <Table.Cell>${book.price}</Table.Cell>
                <Table.Cell>
                  <div className="w-[100px] h-[80px] break-words overflow-hidden">
                    <a href={book.imageURL} className="hover:underline">
                      {book.imageURL}
                    </a>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="w-[100px] break-words">
                    <a href={book.bookPDFURL} className="hover:underline">
                      {book.bookPDFURL}
                    </a>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2 items-center flex-col">
                    <Link
                      to={`/admin/dashboard/edit-book/${book._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      index={index}
                      className="px-2 py-1 bg-red-500 hover:bg-red-700 transition-all ease-in text-white font-semibold rounded-sm"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
