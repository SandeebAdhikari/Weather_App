import React from "react";
import WeeklyForecastCard from "../components/cards/weeklyForecastCard";

const WeeklyForecast = () => {
  return (
    <>
      <div className="flex flex-col items-center w-1/2  md:px-10">
        <h1 className="font-bold text-[24px]">WEEKLY FORECAST</h1>
        <div className="flex flex-col w-full my-6 gap-3 ">
          <WeeklyForecastCard />
          <WeeklyForecastCard />
          <WeeklyForecastCard />
          <WeeklyForecastCard />
          <WeeklyForecastCard />
          <WeeklyForecastCard />
        </div>
      </div>
    </>
  );
};

export default WeeklyForecast;
