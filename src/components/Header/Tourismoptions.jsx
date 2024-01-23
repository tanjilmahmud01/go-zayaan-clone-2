import React from "react";
import flightIcon from "../../assets/flight-icon.svg";
import hotelIcon from "../../assets/hotel-icon.svg";
import toursIcon from "../../assets/tours-icon.svg";

const Tourismoptions = () => {
  return (
    <div>
      {/* to position in center using absolute position: left-1/2 -translate-x-1/2   */}
      <div className="h-[70px] w-[700px] bg-white rounded-xl shadow-xl absolute z-20 top-[220px] left-1/2 -translate-x-1/2 flex justify-center items-center gap-4">
        <button>
          <div className="flex justify-center items-center gap-2  w-[120px] h-[70px]">
            <img src={flightIcon} alt="flight-icon" />
            <span className="font-bold">Flight</span>
          </div>
        </button>
        <button>
          <div className="flex justify-center items-center gap-2  w-[120px] h-[70px]">
            <img src={hotelIcon} alt="hotel-icon" />
            <span className="font-bold">Hotel</span>
          </div>
        </button>
        <button>
          <div className="flex justify-center items-center gap-2  w-[120px] h-[70px]">
            <img src={toursIcon} alt="toursIcon-icon" />
            <span className="font-bold">Tour</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Tourismoptions;
