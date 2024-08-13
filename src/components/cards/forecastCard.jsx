import React from "react";

const ForecastCard = ({ hourData }) => {
  const temperature = hourData.temp;
  const iconCode = hourData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const time = new Date(hourData.dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col w-32 h-44 rounded-lg shadow-sm shadow-white">
      <div className="text-center">
        <p>{time}</p>
      </div>
      <div className="flex justify-center">
        <img src={iconUrl} alt="Weather Icon" className="w-20" />
      </div>
      <div className="flex justify-center">
        <h2 className="font-bold">{temperature} °C</h2>
      </div>
    </div>
  );
};

export default ForecastCard;
