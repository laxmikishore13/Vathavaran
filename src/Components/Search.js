import React, { useState } from "react";
import "./Search.css";
import Body from "./Body";

const Search = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=45ce0b853150ff9efee11c412f13d66b`;

  const handleChange = async (event) => {
    if (event.key === "Enter") {
      const fetchRequest = await fetch(URL);
      const response = await fetchRequest.json();
      setWeather({
        cityName: response.name,
        presentTemperature: response.main.temp,
        maxTemperature: response.main.temp_max,
        minTemperature: response.main.temp_min,
        humidity: response.main.humidity,
        sunriseTime: new Date(response.sys.sunrise * 1000).toLocaleTimeString(),
        sunsetTime: new Date(response.sys.sunset * 1000).toLocaleTimeString(),
        mood: response.weather[0].description,
        windSpeed: (response.wind.speed * 3.6).toFixed(),
      });
    }
  };
  return (
    <div className="body-display">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search City..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleChange}
        />
      </div>
      <Body weather={weather} />
    </div>
  );
};

export default Search;
