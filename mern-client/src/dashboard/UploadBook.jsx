import React, { useState } from "react";

import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
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

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleBookCategoryChange = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmission = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.author.value;
    const category = form.category.value;
    const bookDescription = form.description.value;
    const price = form.price.value;
    const imageURL = form.image.value;
    const bookPDFURL = form.bookPDFURL.value;

    // Send data to database
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookTitle: bookTitle,
        authorName: authorName,
        category: category,
        bookDescription: bookDescription,
        price: price,
        imageURL: imageURL,
        bookPDFURL: bookPDFURL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        form.reset();
        alert("Book uploaded successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-8 my-12">
      <h2 className="text-3xl mb-8 font-bold text-black">Upload a Book</h2>

      {/* Form */}
      <form
        onSubmit={handleBookSubmission}
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
              <Select
                id="category"
                required
                value={selectedBookCategory}
                onChange={handleBookCategoryChange}
              >
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
              placeholder="Enter a URL to download the book's PDF..."
              required
              shadow
            />
          </div>
        </div>

        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
