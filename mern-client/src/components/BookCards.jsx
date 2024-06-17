import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../stylesheets/BookCards.css";

// Import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// Import React Icons
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ books, headline }) => {
  return (
    <div className="mt-12 px-4 lg:px-24">
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold text-black mb-8 mt-0">
        {headline}
      </h1>

      {/* Books */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={book.imageURL} alt={book.bookTitle} />
                  <div className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-700 p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <h1 className="text-xl font-bold text-black">
                        {book.bookTitle}
                      </h1>
                      <p className="text-lg text-gray-900">{book.authorName}</p>
                    </div>
                    <div className="text-base">$10.00</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
