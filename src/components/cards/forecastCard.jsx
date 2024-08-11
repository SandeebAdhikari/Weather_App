import React from "react";
import Cloud from "/assets/icons/cloud.png";
import CurrentDateTime from "../currentDateAndTime";

const ForecastCard = () => {
  return (
    <>
      <div className="flex flex-col w-32 h-44 rounded-lg shadow-sm shadow-white">
        <div className="text-center">
          <CurrentDateTime showAmPm={false} showDate={false} />
        </div>
        <div className="flex justify-center">
          <img src={Cloud} alt="Cloud" className="w-20" />
        </div>
        <div className="flex justify-center">
          <h2 className="font-bold">7 °C </h2>
        </div>
      </div>
    </>
  );
};

export default ForecastCard;
