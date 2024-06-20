import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

// Import Flowbite React Components
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBook = () => {
  const navigate = useNavigate();

  const book = useLoaderData();

  const {
    _id,
    bookTitle,
    authorName,
    category,
    bookDescription,
    price,
    imageURL,
    bookPDFURL,
  } = book;

  const bookCategories = [
    "",
    "Fiction",
    "Thriller",
    "Comics",
    "Sci-Fi",
    "Horror",
    "Romance",
    "Fantasy",
    "Mystery",
    "Biography",
    "Autobiography",
    "History",
    "Cooking",
    "Education",
    "Politics",
    "Business",
    "Psychology",
    "Health",
    "Travel",
    "Memoir",
    "Children's Books",
    "Art",
    "Religion",
  ];

  const handleBookEdition = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.author.value;
    const category = form.category.value;
    const bookDescription = form.description.value;
    const price = form.price.value;
    const imageURL = form.image.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatedBookObj = {
      bookTitle,
      authorName,
      category,
      bookDescription,
      price,
      imageURL,
      bookPDFURL,
    };

    // Update book in the database
    fetch(`http://localhost:5000/book/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Book updated successfully!");
        navigate(-1);
      })
      .catch((err) => {
        console.error("Delete error: ", err);
      });
  };

  const handleBookTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleAuthorNameChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleBookPDFURLChange = (event) => {
    setBookPDFURL(event.target.value);
  };

  return (
    <div className="px-8 my-12">
      <h2 className="text-3xl mb-8 font-bold text-black">Edit this Book</h2>

      {/* Form */}
      <form
        onSubmit={handleBookEdition}
        className="flex lg:w-[1080px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              defaultValue={bookTitle}
              type="text"
              placeholder="Enter Book Name"
              required
              shadow
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput
              id="author"
              name="author"
              defaultValue={authorName}
              type="text"
              placeholder="Enter the Author's Name"
              required
              shadow
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Select a book category" />
            </div>
            <div className="h-10 overflow-y-visible">
              <Select id="category" required defaultValue={category}>
                {bookCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            placeholder="Enter the book synopsis here..."
            defaultValue={bookDescription}
            required
            rows={6}
          />
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price (in dollars)" />
            </div>
            <TextInput
              id="price"
              name="price"
              defaultValue={price}
              type="number"
              placeholder="Enter the book's price here..."
              required
              shadow
              step={0.01}
            />
          </div>
          <div className="lg:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="image" value="Book Cover Photo URL" />
            </div>
            <TextInput
              id="image"
              name="image"
              defaultValue={imageURL}
              type="url"
              placeholder="Enter a URL containing a photo of the book..."
              required
              shadow
            />
          </div>
          <div className="lg:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              type="url"
              defaultValue={bookPDFURL}
              placeholder="Enter a URL to download the book's PDF..."
              required
              shadow
            />
          </div>
        </div>

        <Button type="submit">Edit Book</Button>
      </form>
    </div>
  );
};

export default EditBook;
