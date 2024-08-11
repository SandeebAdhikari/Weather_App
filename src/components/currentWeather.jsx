import React from "react";
import { FiWind } from "react-icons/fi";
import { CgThermostat } from "react-icons/cg";
import { MdFilterDrama } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import Humidity from "../assets/humidity.svg";
import Cloud from "../assets/icons/cloud.png";

const currentWeather = () => {
  return (
    <>
      <div className="flex flex-col items-center w-1/2">
        <h1 className="font-bold text-[24px]">CURRENT WEATHER</h1>
        <div className="flex justify-between w-full p-10 py-6">
          <div className="flex flex-col justify-between items-center">
            <h1 className="font-bold">LONDON,DE</h1>
            <p>Today 13 Feb</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h1 className="font-bold">7 °C </h1>
            <p>Broken Cloud</p>
          </div>
          <div className="flex justify-between items-center">
            <img src={Cloud} className="w-14" />
          </div>
        </div>

        <h1 className="font-bold text-[24px]">AIR CONDITIONS</h1>
        <div className="flex justify-between w-full px-10 py-6">
          <div className="flex flex-col justify-between items-center">
            <div className="flex">
              <CgThermostat size={24} />
              <h1>Feels Like</h1>
            </div>
            <p>5 °C </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="flex gap-2">
              <FiWind size={24} />
              <h1>Winds</h1>
            </div>
            <p>3.09 m/s</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex gap-2">
              <MdFilterDrama size={24} />
              <h1>Clouds</h1>
            </div>
            <p>75%</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex gap-2">
              <img src={Humidity} className="w-6" />
              <h1>Humidity</h1>
            </div>
            <p>91%</p>
          </div>
        </div>

        <h1 className="font-bold text-[24px]">TODAY'S FORECAST</h1>
        <div className="flex justify-between w-full p-10 py-6">
          <div className="flex flex-col">
            <h1 className="font-bold ">LONDON,DE</h1>
            <p>Today 13 Feb</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">7 °C </h1>
            <p>Broken Cloud</p>
          </div>
          <div className="">
            <img src={Cloud} className="w-14" />
          </div>
        </div>
      </div>
    </>
  );
};

export default currentWeather;
