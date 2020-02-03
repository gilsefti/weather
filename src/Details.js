import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
  Switch,
  Route,
  Link
} from "react-router-dom"

function Details() {
  let location = useLocation()
  let tempWeather = location.state.weather
  const [weather, setWeather] = useState({ ...tempWeather })
  return (
    <div>
      <div>{weather.name}</div>
      <div>temperature: {weather.main.temp}</div>
      <div>wind: {weather.wind.speed}</div>
    </div>
  )
}
export default Details
