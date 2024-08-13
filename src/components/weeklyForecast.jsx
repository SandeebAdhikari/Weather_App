import React from "react";
import WeeklyForecastCard from "./cards/weeklyForecastCard";

const WeeklyForecast = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="flex flex-col items-center w-1/2  md:px-10">
        <h1 className="font-bold text-[24px]">WEEKLY FORECAST</h1>
        <div className="flex flex-col w-full my-10 gap-3 ">
          {weatherData.daily.slice(1, 7).map((day, index) => (
            <WeeklyForecastCard key={index} dayData={day} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WeeklyForecast;
