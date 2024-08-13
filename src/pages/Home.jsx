import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import CurrentWeather from "../components/currentWeather";
import WeeklyForecast from "../components/weeklyForecast";
import { getCoordinates } from "../components/cards/fetchCoordinate.js";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Morristown");

  const handleCityNameChange = async (newCityName) => {
    setCityName(newCityName);

    try {
      const { lon, lat } = await getCoordinates(newCityName);

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=10912080c80f9bd3a00c034b2341867d&units=metric`
      );
      const data = await weatherResponse.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    // Fetch weather data for the default city when the component mounts
    handleCityNameChange("Morristown");
  }, []);

  return (
    <>
      <NavBar onCityNameChange={handleCityNameChange} />
      <div className="flex justify-between w-full">
        <CurrentWeather weatherData={weatherData} cityName={cityName} />
        <WeeklyForecast weatherData={weatherData} />
      </div>
    </>
  );
};

export default Home;
