import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/headers/Header";
import Home from "./component/home/Home";
import "./App.css";
import Checkout from "./component/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/checkout" component={Checkout}>
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
