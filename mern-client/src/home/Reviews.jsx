import React, { useRef, useState } from "react";

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

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-4xl text-black font-bold text-center mb-8">
        Our Customers
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-4">
            <div className="text-amber-400 flex gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                deserunt ab aspernatur cum quod quam cumque sed ex consequuntur
                necessitatibus veritatis recusandae pariatur perspiciatis? Odio,
                debitis! Deserunt odio voluptatem officiis!
              </p>
              <Avatar img={profileImg} rounded className="w-10 mt-3" />
              <h1 className="text-xl font-bold text-black my-1">Mark Ping</h1>
              <p>CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
