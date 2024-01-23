import React, { useState } from "react";
import bannerImg from "../../assets/banner-image.jpeg";
import Navbar from "./Navbar";
import RegionandCurrency from "./RegionandCurrency";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";
import flightIcon from "../../assets/flight-icon.svg";
import hotelIcon from "../../assets/hotel-icon.svg";
import toursIcon from "../../assets/tours-icon.svg";
import Tourismoptions from "./Tourismoptions";
import tourOptionSelected from "../../assets/tour-option-selected.svg";
import tourOptionDisabled from "../../assets/tour-option-disabled.svg";
import FlightSelection from "./FlightSelection";

const Header = () => {
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [selectedRegionandCurrency, setSelectedRegionandCurrency] = useState({
    regionName: "Bangladesh",
    regionId: 1,
    regionFlag: bdicon,
    regionCurrency: "BDT",
    regionIsSelected: true,
  });

  const [selectedTourOption, setSelectedTourOption] = useState({
    oneway: false,
    roundway: true,
    multicity: false,
  });

  const openRegionandCurrency = () => {
    setCurrencyOpen(!isCurrencyOpen);
    // console.log("isCurrencyOpen: ", isCurrencyOpen);
  };

  const handleCloseRegionandCurreny = (selectedRegion) => {
    setCurrencyOpen(false);
    setSelectedRegionandCurrency(selectedRegion);
  };

  const handleTourChangeOption = (changedTourOption) => {
    setSelectedTourOption(changedTourOption);
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

        {/* dropdown */}
        {isCurrencyOpen ? (
          <div>
            <RegionandCurrency
              closeRegionandCurrency={handleCloseRegionandCurreny}
            />
          </div>
        ) : (
          ""
        )}

        {/* flight, hotel, tour selection */}

        <Tourismoptions />

        {/* data holder div */}
        <div className="min-h-56 w-[1200px] bg-white rounded-3xl absolute top-[260px] left-1/2 -translate-x-1/2">
          <FlightSelection
            selectedTourOption={selectedTourOption}
            onchangeTourOption={handleTourChangeOption}
          />
        </div>

        <picture>
          <img className="w-full" src={bannerImg} alt="banner-image" />
        </picture>
      </div>
      <div className="mt-10 h-[100vh] w-full"></div>
    </header>
  );
};

export default Header;
