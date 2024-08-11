import React from "react";
import NavBar from "../components/navBar";
import CurrentWeather from "../components/currentWeather";
import WeeklyForecast from "../components/weeklyForecast";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-between w-11/12">
        <CurrentWeather />
        <WeeklyForecast />
      </div>
    </>
  );
};

export default Home;