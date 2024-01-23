import React, { useState } from "react";
import bannerImg from "../../assets/banner-image.jpeg";
import Navbar from "./Navbar";
import RegionandCurrency from "./RegionandCurrency";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";

const Header = () => {
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [selectedRegionandCurrency, setSelectedRegionandCurrency] = useState({
    regionName: "Bangladesh",
    regionId: 1,
    regionFlag: bdicon,
    regionCurrency: "BDT",
    regionIsSelected: true,
  });

  const openRegionandCurrency = () => {
    setCurrencyOpen(!isCurrencyOpen);
    // console.log("isCurrencyOpen: ", isCurrencyOpen);
  };

  const handleCloseRegionandCurreny = (selectedRegion) => {
    setCurrencyOpen(false);
    setSelectedRegionandCurrency(selectedRegion);
  };

  return (
    <header>
      <div className=" h-[729px] ">
        <div className="flex justify-center">
          <Navbar
            openRegionandCurrency={openRegionandCurrency}
            selectedRegionandCurrency={selectedRegionandCurrency}
          />
        </div>
        {isCurrencyOpen ? (
          <div>
            <RegionandCurrency
              closeRegionandCurrency={handleCloseRegionandCurreny}
            />
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
