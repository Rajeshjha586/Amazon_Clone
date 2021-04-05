import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/headers/Header";
import Home from "./component/home/Home";
import "./App.css";
import Checkout from "./component/checkout/Checkout";
import Login from "./component/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
          <Route exact path="/checkout" component={Checkout}>
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/" component={Checkout}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
