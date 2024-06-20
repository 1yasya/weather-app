import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherCard from "./WeatherCard";
import LoginForm from "./LoginForm";
import Quiz from "./Quiz";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const apiKey = "bd5e378503939ddaee76f12ad7a97608";
  const city = "Kyiv";

  useEffect(() => {
    if (loggedIn) {
      const fetchWeather = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          setWeather(response.data);
        } catch (error) {
          console.error("Error fetching the weather data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
      const intervalId = setInterval(fetchWeather, 10000);

      return () => clearInterval(intervalId);
    }
  }, [loggedIn]);

  const handleLogin = (email, password) => {

    console.log("Logged in with", email, password);
    setLoggedIn(true);
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Weather App</h1>
      {loggedIn ? (
        <>
          <button
            onClick={() => setShowQuiz(!showQuiz)}
            className="btn btn-secondary mb-4"
          >
            {showQuiz ? "Hide Quiz" : "Show Quiz"}
          </button>
          {showQuiz ? (
            <Quiz />
          ) : loading ? (
            <p>Loading...</p>
          ) : weather ? (
            <div className="row">
              <WeatherCard weather={weather} />
            </div>
          ) : (
            <p>No weather data available</p>
          )}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
