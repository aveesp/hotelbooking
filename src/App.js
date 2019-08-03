import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
