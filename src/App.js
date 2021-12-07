import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
// import axios from 'axios'
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
// import Home from './Home';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
