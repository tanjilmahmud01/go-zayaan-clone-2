import React from "react";
import bannerImg from "../../assets/banner-image.jpeg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className=" h-[729px] ">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <picture>
          <img className="w-full" src={bannerImg} alt="banner-image" />
        </picture>
      </div>
    </header>
  );
};

export default Header;
