import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const WeatherStructure = ({ apidata }) => {
  const [clouds, setClouds] = useState();

  const { temp, humidity, pressure, country, sunset, speed, name, main } =
    apidata;

  const sec = sunset;
  const sunsetinfo = new Date(sec * 1000);
  const sunsetTime = `${sunsetinfo.getHours()} : ${sunsetinfo.getMinutes()}`;

  useEffect(() => {
    if (main) {
      switch (main) {
        case 'Clear':
          setClouds("wi-day-sunny");
          break;
        case 'Smoke':
          setClouds("wi-night-fog");
          break;
        case 'Clouds':
          setClouds("wi-day-cloudy");
          break;
        case 'Rainy':
          setClouds("wi-sprinkle");
          break;

        default:
            setClouds("wi-sprinkle")
          break;
      }
    }
  }, [main]);

  return (
    <>
      <div className="mainDiv">
        <div className="header">
          <i className={`wi ${clouds}`}></i>
        </div>
        <div className="weather_info">
          <div className="part1">
            <h1>
              {temp} <span>&#176;</span>
            </h1>
          </div>
          <div className="part2">
            <h3> {main} </h3>
            <p>
              {name} , {country}
            </p>
          </div>
          <div className="part3">
            <h3> {new Date().toLocaleDateString()} </h3>
            <h3> {new Date().toLocaleTimeString()} </h3>
          </div>
        </div>

        <div className="footer">
          <div className="p1">
            <div className="icon">
              <i className="wi wi-sunset"></i>
            </div>
            <div className="txt">
              <p> {sunsetTime} </p>
              <p> Sunset </p>
            </div>
          </div>

          <div className="p2">
            <div className="icon">
              <i className="wi wi-humidity"></i>
            </div>
            <div className="txt">
              <p> {humidity} </p>
              <p> humidity </p>
            </div>
          </div>
          <div className="p3">
            <div className="icon">
              <i className="wi wi-night-hail"></i>
            </div>
            <div className="txt">
              <p> {pressure} </p>
              <p> Pressure </p>
            </div>
          </div>
          <div className="p4">
            <div className="icon">
              <i className="wi wi-wind-beaufort-4"></i>
            </div>
            <div className="txt">
              <p> {speed} </p>
              <p> Speed </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherStructure;
