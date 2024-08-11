import React from "react";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CurrentWeather />
      <WeeklyForecast />
    </div>
  );
};

export default Home;
