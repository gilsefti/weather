import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import axios from "axios"
import logo from "./logo192.png"
import "./App.css"
const BaseAddress = "http://localhost:6600/api/"
var test = 0
const mockWeather = {
  coord: { lon: -0.13, lat: 51.51 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
  ],
  base: "stations",
  main: {
    temp: "",
    feels_like: 278.19,
    temp_min: 281,
    temp_max: 290,
    pressure: 1005,
    humidity: 93
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 190 },
  clouds: { all: 90 },
  dt: 1580375118,
  sys: { type: 1, id: 1502, country: "GB", sunrise: 1580370168, sunset: 1580402666 },
  timezone: 0,
  id: 2643743,
  name: "",
  cod: 200
}
function WeatherBlock(props) {
  const [weather, setWeather] = useState({ ...mockWeather })
  useEffect(() => {
    if (props.city) getForecast(props.city)
    else {
      navigator.geolocation.getCurrentPosition((position) => {
        let { latitude, longitude } = position.coords
        getForecastLocation(latitude, longitude)
      })
    }
  }, []) // <-- empty dependency array

  async function getForecastLocation(latitude, longitude) {
    // if (location.latitude === 0) return
    let add = BaseAddress + `Weather/byloc/${latitude}/${longitude}`
    console.log(add)
    const resp = await axios.get(add)
    setWeather({ ...resp.data })
    //setWeather({ ...mockWeather })
    // let data = resp.data
  }

  async function getForecast(city) {
    let add = BaseAddress + `Weather/bycity/${city}`
    console.log(add)
    const resp = await axios.get(add)
    setWeather({ ...resp.data })
    //setWeather({ ...mockWeather })
    // let data = resp.data
  }
  const history = useHistory()
  function handleClick(event) {
    event.preventDefault()
    console.log("Payment")
    history.push({
      pathname: "/details",
      state: { weather: weather }
    })
    //  history.push("/home");
  }

  return (
    <div class="weather_block" onClick={handleClick}>
      <p class="block_header">{weather.name}</p>
      <div class="temp">
        <span class="high">{weather.main.temp}</span>
        <span class="low">K</span>
      </div>
    </div>
  )
}
function MainWeather() {
  const [location, setLocation] = useState({})
  // function setPosition(position) {
  //   setLocation({
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude
  //   })
  //   console.log(position.coords)
  //   console.log(location)
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }, [])

  return (
    <div>
      <div class="blockContainer">
        <WeatherBlock gLocation="location" />
        <WeatherBlock city="London,uk" />
        <WeatherBlock city="Jerusalem,il" />
        <WeatherBlock city="Haifa,il" />
      </div>
    </div>
  )
}
export default MainWeath