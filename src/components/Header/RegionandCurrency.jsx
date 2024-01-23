import React, { useEffect, useState } from "react";
import Regions from "./Regions";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";
import inicon from "../../assets/india-icon.png";
import Currency from "./Currency";

const RegionandCurrency = ({ closeRegionandCurrency }) => {
  //dummy region data
  let regionsInfo = [
    {
      regionName: "Bangladesh",
      regionId: 1,
      regionFlag: bdicon,
      regionCurrency: "BDT",
      regionIsSelected: true,
    },
    {
      regionName: "Pakistan",
      regionId: 2,
      regionFlag: pkicon,
      regionCurrency: "PKR",
      regionIsSelected: false,
    },
    {
      regionName: "India",
      regionId: 3,
      regionFlag: inicon,
      regionCurrency: "INR",
      regionIsSelected: false,
    },
  ];

  //states
  const [selectedRegionState, setSelectedRegionState] = useState({
    regionName: "Bangladesh",
    regionId: 1,
    regionFlag: bdicon,
    regionCurrency: "BDT",
    regionIsSelected: true,
  });

  const [regionData, setRegionData] = useState(regionsInfo);

  //handlers
  const handleSelectRegion = (selectedRegion) => {
    // make the selected region's regionIsSelected property as 'true'

    selectedRegion.regionIsSelected = true;

    let copyRegionsInfo = regionsInfo.map((region) => {
      if (region.regionId === selectedRegion.regionId) {
        return selectedRegion;
      } else {
        return { ...region, regionIsSelected: false };
      }
    });

    setRegionData(copyRegionsInfo);
  };

  return (
    <div className="absolute top-20 right-[345px] z-[30] w-[330px] h-[215px] p-[15px] rounded-lg  bg-white">
      <div className="">
        <div className="flex gap-6 ">
          <div className=" w-[180px]">
            <span className="font-bold text-[#1c3c6b]">Region</span>

            {/* country component*/}
            <Regions
              regionData={regionData}
              onSelectRegion={handleSelectRegion}
              setSelectedRegionState={setSelectedRegionState}
            />
          </div>

          <div className=" flex justify-start gap-10">
            {/* divider */}
            <div className="inline-block h-[160px] min-h-[1em] w-[0.1px] self-stretch bg-gray-600/35 "></div>

            <div className="">
              <span className="font-bold text-[#1c3c6b]">Currency</span>

              {/* currency component*/}
              <Currency selectedRegionState={selectedRegionState} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => closeRegionandCurrency(selectedRegionState)}
          className="absolute bottom-2 right-4 "
        >
          <div className="w-[60px] h-[35px] bg-[#fccd03] flex items-center justify-center rounded-lg hover:shadow-2xl hover: shadow-yellow-300 transition-all duration-300">
            <span className="font-bold">Apply</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegionandCurrency;
