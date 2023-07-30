import React from "react";
import "./Body.css";

const Body = ({ weather }) => {
  const {
    cityName,
    humidity,
    maxTemperature,
    minTemperature,
    mood,
    presentTemperature,
    sunriseTime,
    sunsetTime,
    windSpeed,
  } = weather;
  console.log(weather);

  if (!cityName) return null;
  return (
    <div className="main-container">
      <div className="display-weather">
        <div className="bottom-field city">
          <p className="bold">{cityName}</p>
          <p>City</p>
        </div>
        <div className="bottom-field temp">
          <p className="bold">{presentTemperature}°C</p>
          <p>Temperature</p>
        </div>
        <div className="bottom-field  humidity">
          <p className="bold">{humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="bottom-field  wind">
          <p className="bold">{windSpeed} km/hr</p>
          <p>WindSpeed</p>
        </div>
        <div className="bottom-field  mood">
          <p className="bold">{mood}</p>
          <p>Mood</p>
        </div>
        <div className="bottom-field  sunrise">
          <p className="bold">{sunriseTime}</p>
          <p>Sunrise</p>
        </div>
        <div className="bottom-field  sunset">
          <p className="bold">{sunsetTime}</p>
          <p>Sunset</p>
        </div>
        <div className="bottom-field  maxtemp">
          <p className="bold">{maxTemperature}°C</p>
          <p>Max Temp</p>
        </div>
        <div className="bottom-field  mintemp">
          <p className="bold">{minTemperature}°C</p>
          <p>Min Temp</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
