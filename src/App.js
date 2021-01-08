import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Marks from "./components/Marks";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Marks" exact component={Marks} />
            <Route path="/Leaderboard" exact component={Leaderboard} />
            <Route path="/Edit" exact component={Edit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
