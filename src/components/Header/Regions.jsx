import React from "react";

import { MdCheck } from "react-icons/md";

const Regions = ({ regionData, onSelectRegion }) => {
  return (
    <div>
      {regionData.map((region) => (
        <div
          onClick={() => onSelectRegion(region.regionId)}
          key={region.regionId}
          className="mt-4 mb-4"
        >
          <button>
            <div className="flex gap-4 items-center">
              <div className="flex gap-3 items-center">
                <picture>
                  <img
                    className="size-[24px]"
                    src={region.regionFlag}
                    alt="bangladesh-flag-icon"
                  />
                </picture>
                <span>{region.regionName}</span>
              </div>
              <div>
                {region.regionIsSelected ? (
                  <MdCheck className="text-xl text-blue-600" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Regions;
