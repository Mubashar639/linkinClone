import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

// Components
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>

        <NavBar />
        {/* <Router basename="/">

      </Router> */}

    </>
  );
}

export default App;
