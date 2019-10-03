import React, { Component } from "react";
import Champions from "./components/champions";
import ChampionProfile from "./components/championProfile";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/common/navbar";
import "./App.css";
import SummonerProfile from "./components/summonerProfile";

class App extends Component {
  state = {
    navItems: [
      { name: "Champions", path: "/champions" },
      { name: "Summoners", path: "/summoners" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-dark">
            <Navbar navItems={this.state.navItems} />
            <div className="container-fluid">
              <Switch>
                <Route
                  path="/champions/:name"
                  render={props => <ChampionProfile {...props} />}
                />
                <Route path="/champions" component={Champions} />
                <Route path="/summoners/:name" component={SummonerProfile} />
                <Route path="/" component={Champions} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
