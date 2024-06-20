import React, { useState } from "react";

const WeatherCard = ({ weather }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{weather.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {weather.weather[0].description}
          </h6>
          <p className="card-text">Temperature: {weather.main.temp} °C</p>
          {expanded && (
            <div>
              <p className="card-text">
                Feels like: {weather.main.feels_like} °C
              </p>
              <p className="card-text">
                Minimum Temperature: {weather.main.temp_min} °C
              </p>
              <p className="card-text">
                Maximum Temperature: {weather.main.temp_max} °C
              </p>
            </div>
          )}
          <button onClick={toggleExpanded} className="btn btn-primary">
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
