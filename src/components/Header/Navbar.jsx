import React, { useState } from "react";
import logo from "../../assets/go-zayaan-logo.svg";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";
import inicon from "../../assets/india-icon.png";
import arrowDownIcon from "../../assets/arrow-down-icon.svg";

const Navbar = ({ openRegionandCurrency, selectedRegionandCurrency }) => {
  // console.log(
  //   "selected region and currency in Navbar: ",
  //   selectedRegionandCurrency
  // );
  return (
    <nav className="absolute top-0">
      <div className="border-2 border-blue-700 w-[1250px] h-[78px] p-[14px] flex justify-between">
        {/* logo */}
        <picture>
          <img src={logo} alt="" />
        </picture>

        <div className="w-[200px] h-[48px] border border-yellow-400 flex justify-between ">
          {/* region and currency dropdown */}
          <button onClick={openRegionandCurrency}>
            <div className="w-[85px] h-[28px] gap-2 flex items-center border border-green-400">
              <img
                className="size-[24px]"
                src={selectedRegionandCurrency?.regionFlag}
                alt=""
              />
              <span className="font-semibold text-gray-500">
                {selectedRegionandCurrency?.regionCurrency}
              </span>
              <img src={arrowDownIcon} alt="" />
            </div>
          </button>

          {/* signin button */}
          <button>
            <div className="w-[108px] h-[45px] px-[21px] py-[11px] bg-[#1c3c6b] rounded-lg hover:shadow-2xl transition-all duration-300">
              <span className="font-semibold text-white">Sign In</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
