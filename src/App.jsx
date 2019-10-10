import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Champions from "./components/champions";
import ChampionProfile from "./components/championProfile";
import SummonerProfile from "./components/summonerProfile";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  state = {
    navItems: [
      { name: "Champions", path: "/champions" },
      { name: "Summoners", path: "/summoners" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="main-container">
            <Navbar navItems={this.state.navItems} />
            <div className="container-fluid container-dark">
              <Switch>
                <Route
                  path="/champions/:name"
                  render={props => <ChampionProfile {...props} />}
                />
                <Route path="/champions" component={Champions} />
                <Route path="/summoner/:name" component={SummonerProfile} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
