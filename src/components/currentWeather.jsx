import React from "react";
import { FiWind } from "react-icons/fi";
import { CgThermostat } from "react-icons/cg";
import { MdFilterDrama } from "react-icons/md";
import Humidity from "/assets/humidity.svg";
import Cloud from "/assets/icons/cloud.png";
import ForecastCard from "./cards/forecastCard";

const CurrentWeather = ({ weatherData, cityName }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const current = weatherData.current;
  const iconCode = current.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <div className="flex flex-col items-center w-1/2 gap-10">
        <h1 className="font-bold text-[24px]">CURRENT WEATHER</h1>
        <div className="flex justify-between w-full px-10 ">
          <div className="flex flex-col justify-between items-center">
            <h1 className="font-bold">{cityName.toUpperCase()}</h1>
            <p>Today {new Date(current.dt * 1000).toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h1 className="font-bold">{current.temp} °C </h1>
            <p>{current.weather[0].description}</p>
          </div>
          <div className="flex justify-between items-center">
            <img src={iconUrl} className="w-14" alt="Weather Icon" />
          </div>
        </div>

        <h1 className="font-bold text-[24px]">AIR CONDITIONS</h1>
        <div className="flex justify-between w-full px-10 py-6">
          <div className="flex flex-col justify-between items-center">
            <div className="flex">
              <CgThermostat size={24} />
              <h1>Feels Like</h1>
            </div>
            <p>{current.feels_like} °C </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="flex gap-2">
              <FiWind size={24} />
              <h1>Winds</h1>
            </div>
            <p>{current.wind_speed} m/s</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex gap-2">
              <MdFilterDrama size={24} />
              <h1>Clouds</h1>
            </div>
            <p>{current.clouds}%</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex gap-2">
              <img src={Humidity} className="w-6" alt="Humidity Icon" />
              <h1>Humidity</h1>
            </div>
            <p>{current.humidity}%</p>
          </div>
        </div>

        <h1 className="font-bold text-[24px]">TODAY'S FORECAST</h1>
        <div className="flex justify-center w-full px-10 py-6 ">
          <div className="flex justify-between gap-2 flex-wrap">
            {weatherData.hourly.slice(0, 6).map((hour, index) => (
              <ForecastCard key={index} hourData={hour} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
