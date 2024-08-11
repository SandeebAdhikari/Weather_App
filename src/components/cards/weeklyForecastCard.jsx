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
        <div className="flex flex-col  gap-2 px-8 py-2">
          <h1 className="font-bold">Tuesday</h1>
          <div className="flex gap-1 items-center">
            <img src={Cloud} className="w-10" />
            <p className="align-baseline">overcast clouds</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 py-2">
          <h1 className="font-bold">Tuesday</h1>
          <div className="flex gap-1 items-center">
            <img src={Cloud} className="w-10" />
            <p className="align-baseline">overcast clouds</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 py-2">
          <h1 className="font-bold">Tuesday</h1>
          <div className="flex gap-1 items-center">
            <img src={Cloud} className="w-10" />
            <p className="align-baseline">overcast clouds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyForecastCard;
