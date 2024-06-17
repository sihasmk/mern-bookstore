import React from "react";
import FavBookImg from "../assets/other-images/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col sm:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img
          src={FavBookImg}
          alt="Favourite book image couldn't be loaded"
          className="rounded md:w-10/12"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-black my-3 md:w-3/4 leading-snug">
          Find Your{" "}
          <span className="text-4xl font-extrabold text-blue-700">
            Favourite Book Here
          </span>
        </h1>
        <p className="mb-10 text-lg md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          tempore ad recusandae! Iure, provident alias necessitatibus, excepturi
          quia voluptas veniam laboriosam voluptatibus pariatur ipsum omnis
          culpa rem blanditiis nisi iusto.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-3 md:w-3/4">
          <div>
            <h1 className="text-2xl font-bold">800+</h1>
            <p className="text-base">Book Listings</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">550+</h1>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">1200+</h1>
            <p className="text-base">PDFs downloaded</p>
          </div>
        </div>
        <Link to="/shop">
          <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 rounded mt-6 transition-all ease-in duration-100">
            Explore now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
