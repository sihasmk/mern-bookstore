import React, { useEffect, useState } from "react";

// Import images needed
import profileImg from "../assets/other-images/profile.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import React Icons
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

// Import Flowbite-React components
import { Avatar } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../stylesheets/BookCards.css";

// Import required modules
import { Pagination } from "swiper/modules";

// Import required functions
import { renderStars } from "../functions/renderStars";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.slice(0, 10));
      });
  }, []);

  return (
    <div className="my-12 px-4 lg:px-16">
      <h2 className="text-4xl text-black font-bold text-center mb-8">
        Our Customers
      </h2>
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="space-y-4 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
              <div className="text-amber-400 flex gap-1">
                {renderStars(review.rating).map((bit, index) =>
                  bit ? (
                    <MdOutlineStarPurple500 key={index} />
                  ) : (
                    <MdOutlineStarOutline key={index} />
                  )
                )}
              </div>
              <div>
                <p className="mt-3">{review.comment}</p>
                <Avatar
                  img={review.profilePicURL}
                  rounded
                  className="w-10 mt-3"
                />
                <h1 className="text-xl font-bold text-black my-1">
                  {review.customerName}
                </h1>
                <p>{review.occupation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
