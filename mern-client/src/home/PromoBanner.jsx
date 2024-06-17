import React from "react";
import awardBooksImg from "../assets/other-images/awardbooks.png";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="py-12 px-4 lg:px-24 bg-teal-100">
      <div className="flex flex-col sm:flex-row justify-between gap-12 items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-black leading-snug">
            2024 National Book Awards for Fiction Shortlist
          </h1>
          <Link to="/shop">
            <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 rounded mt-6 transition-all ease-in duration-100">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-96"
            src={awardBooksImg}
            alt="Image couldn't be loaded"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
