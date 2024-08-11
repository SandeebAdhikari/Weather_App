import React from "react";
import Cloud from "../assets/icons/04d.png";

const currentWeather = () => {
  return (
    <>
      <div className="flex flex-col items-center w-1/2">
        <h1 className="font-bold text-[24px]">CURRENT WEATHER</h1>
        <div className="flex justify-between w-full p-10 py-6">
          <div className="flex flex-col">
            <h1 className="font-bold">LONDON,DE</h1>
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
        <h1 className="font-bold text-[24px]">AIR CONDITIONS</h1>
        <div className="flex justify-between w-full px-10 py-6">
          <div className="flex flex-col">
            <h1 className="font-bold">LONDON,DE</h1>
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
