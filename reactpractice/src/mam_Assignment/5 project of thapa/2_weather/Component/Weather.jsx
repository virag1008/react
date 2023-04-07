import React, { useState, useEffect } from "react";
import "./Style.css";
import { Button } from "@mui/material";
import WeatherStructure from "./WeatherStructure";

const Weather = () => {
  const [searchvalue, setSearchvalue] = useState("Pune");
  const [apidata, setApidata] = useState({});

  const submitFun = async () => {
    try {
      const url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=dd172e0eb2d651a488c1d888975f5378`
      );

      const data = await url.json();

      const {temp,humidity,pressure} = data.main
      const {country,sunset} = data.sys
      const {speed} = data.wind
      const {name} = data
      const {main} = data.weather[0]

      setApidata({
        temp,
        humidity,
        pressure,
        country,
        sunset,
        speed,
        name,
        main
      })


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    submitFun();
  }, []);

  return (
    <>
    <div className="container">
    <div className="searchDiv">
          <input
            type="search"
            placeholder="search..."
            onChange={(e) => setSearchvalue(e.target.value)}
            value={searchvalue}
            autoFocus
          />

          <Button
            variant="contained"
            color="success"
            className="btn"
            onClick={submitFun}
          >
            submit
          </Button>
        </div>
      <WeatherStructure apidata = {apidata}/>
      </div>
    </>
  );
};

export default Weather;


// API DATA FORMAT

// { var a = {
// "coord":{"lon":73.8553,"lat":18.5196},
// "weather":[{"id":800,"main":"Clear","description":"clear sky",   "icon":"01n"}],
// "base":"stations",
// "main":{"temp":296.84,"feels_like":296.18,"temp_min":296.84,"temp_max":296.84,"pressure":1014,"humidity":35,"sea_level":1014,"grnd_level":952},
// "visibility":10000,
// "wind":{"speed":1.6,"deg":118,"gust":1.88},
// "clouds":{"all":0},"dt":1673183793,
// "sys":{"country":"IN","sunrise":1673141915,"sunset":1673181782},"timezone":19800,
// "id":1259229,
// "name":"Pune",
// "cod":200
// }}
