import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import axios from "axios"
import logo from "./logo192.png"
import "./App.css"
import MainWeather from "./MainWeather"
import Details from "./Details"

function App() {
  return (
    <Router>
      <div>
        <div class="header_sky"></div>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <MainWeather />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
