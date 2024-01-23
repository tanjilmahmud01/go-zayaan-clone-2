import React from "react";

import { MdCheck } from "react-icons/md";

const Currency = ({ selectedRegionState }) => {
  return (
    <div>
      <div className="flex gap-4 items-center mt-4">
        <span>{selectedRegionState.regionCurrency}</span>
        <div>
          <MdCheck className="text-xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Currency;
