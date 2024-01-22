import React, { useState } from "react";
import Regions from "./Regions";
import bdicon from "../../assets/bangladesh-icon.png";
import pkicon from "../../assets/pakistan-icon.png";

const RegionandCurrency = () => {
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
      regionCurrency: "BDT",
      regionIsSelected: false,
    },
    {
      regionName: "India",
      regionId: 3,
      regionFlag: pkicon,
      regionCurrency: "INR",
      regionIsSelected: false,
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState({
    regionName: "Bangladesh",
    regionId: 1,
    regionFlag: bdicon,
    regionCurrency: "BDT",
    regionIsSelected: true,
  });

  const [regionData, setRegionData] = useState(regionsInfo);

  const handleSelectRegion = (onSelectedRegionId) => {
    let selectedRegion = regionData.find(
      (region) => region.regionId === onSelectedRegionId
    );

    selectedRegion.regionIsSelected = true;

    let newRegionData = regionData.filter(
      (region) => region.regionId !== onSelectedRegionId
    );

    for (let i = 0; i < newRegionData.length; i++) {
      newRegionData[i].regionIsSelected = false;
    }

    regionsInfo = [selectedRegion, ...newRegionData];
    setRegionData(regionsInfo);
    console.log("selectedRegion: ", regionData);
  };

  //dummy region data

  return (
    <div className="absolute top-20 right-[400px] w-[300px] h-[300px] p-[15px] rounded-lg border-2 border-red-600 bg-white">
      <div>
        <div>
          <div>
            <span className="font-bold text-[#1c3c6b]">Region</span>

            {/* country component*/}
            <Regions
              regionData={regionData}
              onSelectRegion={handleSelectRegion}
            />
          </div>

          {/* divider */}
          <div className="inline-block h-28 min-h-[1em] w-[0.1px] self-stretch bg-gray-600/35 "></div>
        </div>
      </div>
    </div>
  );
};

export default RegionandCurrency;
