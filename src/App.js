import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

// Components
import NavBar from "./Components/NavBar/NavBar";

// Pages
import Home from "./Pages/Profile";
import Feeds from "./Pages/Feeds";

function App() {
  return (
    <>
      <NavBar />
      <Router basename="/">
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/feeds" component={Feeds} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
