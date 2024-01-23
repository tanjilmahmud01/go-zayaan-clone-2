import React from "react";
import tourOptionSelected from "../../assets/tour-option-selected.svg";
import tourOptionDisabled from "../../assets/tour-option-disabled.svg";

const FlightSelection = ({ selectedTourOption, onchangeTourOption }) => {
  return (
    <div className="w-full  mt-12">
      <div className=" border-2 border-blue-600 flex gap-4 ps-[20px]">
        {selectedTourOption.oneway ? (
          <button>
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionSelected} alt="" />
              <span className="font-bold text-lg text-[#1c3c6b]">One Way</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() =>
              onchangeTourOption({
                oneway: true,
                roundway: false,
                multicity: false,
              })
            }
          >
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionDisabled} alt="" />
              <span className="font-bold text-lg text-[#6e6b7b] opacity-45">
                One Way
              </span>
            </div>
          </button>
        )}
        {selectedTourOption.roundway ? (
          <button>
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionSelected} alt="" />
              <span className="font-bold text-lg text-[#1c3c6b]">
                Round Way
              </span>
            </div>
          </button>
        ) : (
          <button
            onClick={() =>
              onchangeTourOption({
                oneway: false,
                roundway: true,
                multicity: false,
              })
            }
          >
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionDisabled} alt="" />
              <span className="font-bold text-lg text-[#6e6b7b] opacity-45">
                Round Way
              </span>
            </div>
          </button>
        )}
        {selectedTourOption.multicity ? (
          <button>
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionSelected} alt="" />
              <span className="font-bold text-lg text-[#1c3c6b]">
                Multi City
              </span>
            </div>
          </button>
        ) : (
          <button
            onClick={() =>
              onchangeTourOption({
                oneway: false,
                roundway: false,
                multicity: true,
              })
            }
          >
            <div className="flex items-center justify-center gap-1">
              <img src={tourOptionDisabled} alt="" />
              <span className="font-bold text-lg text-[#6e6b7b] opacity-45">
                Multi City
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default FlightSelection;
