import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/products1">
            <Header />
            <h1>products1</h1>
          </Route>
          <Route path="/products2">
            <Header />
            <h1>products2</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>


          <h1>Router section</h1>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
