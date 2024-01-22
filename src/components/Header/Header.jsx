import React, { useState } from "react";
import bannerImg from "../../assets/banner-image.jpeg";
import Navbar from "./Navbar";
import RegionandCurrency from "./RegionandCurrency";

const Header = () => {
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);

  const openRegionandCurrency = () => {
    setCurrencyOpen(!isCurrencyOpen);
    console.log("isCurrencyOpen: ", isCurrencyOpen);
  };

  return (
    <header>
      <div className=" h-[729px] ">
        <div className="flex justify-center">
          <Navbar openRegionandCurrency={openRegionandCurrency} />
        </div>
        {isCurrencyOpen ? (
          <div>
            <RegionandCurrency />
          </div>
        ) : (
          ""
        )}
        <picture>
          <img className="w-full" src={bannerImg} alt="banner-image" />
        </picture>
      </div>
      <div className="mt-10 h-[100vh] w-full"></div>
    </header>
  );
};

export default Header;
