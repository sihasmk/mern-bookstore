import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-16 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left side */}
        <div className="md:w-1/2 space-y-6 h-full">
          <p className="text-5xl font-bold leading-snug text-black">
            Buy and Sell your Books
            <span className="text-blue-700 font-extrabold">
              {" "}
              for the best prices
            </span>
          </p>
          <p className="md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            omnis assumenda expedita aperiam doloribus vero earum vitae eaque
            quos labore ipsam reprehenderit necessitatibus amet vel nisi laborum
            a accusantium fugiat!
          </p>
          <div className="space-x-1">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all ease-in duration-100">
              Search
            </button>
          </div>
        </div>

        {/* Right side */}
        <BannerCard />
      </div>
    </div>
  );
};

export default Banner;
