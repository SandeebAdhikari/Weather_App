import React from "react";
import { FiWind } from "react-icons/fi";
import { CgThermostat } from "react-icons/cg";
import { MdFilterDrama } from "react-icons/md";
import Humidity from "/assets/humidity.svg";
import Cloud from "/assets/icons/cloud.png";

const WeeklyForecastCard = () => {
  return (
    <>
      <div className="flex justify-between gap-12 rounded-lg shadow-sm shadow-white">
        <div className="flex flex-col gap-2 px-8 py-4">
          <h1 className="font-bold">Tuesday</h1>
          <div className="flex gap-1 items-center">
            <img src={Cloud} className="w-10" />
            <p>overcast clouds</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 py-4 items-center justify-center">
          <div className="flex gap-2">
            <CgThermostat size={20} />
            <h1 className="font-bold">7°C</h1>
          </div>
          <div className="flex gap-2">
            <MdFilterDrama size={20} />
            <h1 className="font-bold">61%</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 py-4 items-center justify-center">
          <div className="flex gap-2">
            <FiWind size={20} />
            <h1 className="font-bold">26.7 m/s</h1>
          </div>
          <div className="flex gap-2">
            <img src={Humidity} className="w-6" />
            <h1 className="font-bold">80%</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyForecastCard;
