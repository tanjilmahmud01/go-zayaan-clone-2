import React from "react";
import Regions from "./Regions";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";

const RegionandCurrency = () => {
  const regionData = [
    {
      regionName: "Bangladesh",
      regionId: 1,
      regionFlag: bdicon,
      regionIsSelected: true,
    },
    {
      regionName: "Pakistan",
      regionId: 2,
      regionFlag: pkicon,
      regionIsSelected: false,
    },
  ];

  return (
    <div className="absolute top-20 right-[400px] w-[300px] h-[300px] p-[15px] rounded-lg border-2 border-red-600 bg-white">
      <div>
        <div>
          <div>
            <span className="font-bold text-[#1c3c6b]">Region</span>

            {/* country component*/}
            <Regions regionData={regionData} />
          </div>

          {/* divider */}
          <div className="inline-block h-28 min-h-[1em] w-[0.1px] self-stretch bg-gray-600/35 "></div>
        </div>
      </div>
    </div>
  );
};

export default RegionandCurrency;
