import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import AuthMiddleware from "./Store/Middleware/AuthMiddleWare";

import { useDispatch, useSelector } from "react-redux";

// Components
import NavBar from "./Components/NavBar/NavBar";

// Pages
import Home from "./Pages/Profile";
import Feeds from "./Pages/Feeds";

import RegisterPage from "./Pages/register";
import loginPage from "./Pages/login";
import PrivateRoute from "./utils/privateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthMiddleware.Autoload());
  }, [dispatch]);

  let {auth} = useSelector(state => state.AuthReducer);


  return (
    <>
      <NavBar />
      <Router basename="/">
        <Container>
          <Switch>
            <Route exact path="/login" component={loginPage} />

            <PrivateRoute exact path="/home" component={Home} />

            <PrivateRoute exact path="/pages/feeds" component={Feeds} />
            <Route exact path="/" component={RegisterPage} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
