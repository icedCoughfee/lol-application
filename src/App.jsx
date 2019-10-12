import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Champions from "./components/champions";
import ChampionProfile from "./components/championProfile";
import SummonerProfile from "./components/summonerProfile";
import { getChampions } from "./services/championService";
import Home from "./components/home";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = {
    version: "",
    champions: [],
    navItems: [
      { name: "Champions", path: "/champions" },
      { name: "Summoners", path: "/summoners" },
    ],
  };

  async componentDidMount() {
    const { data: getChampionResponse } = await getChampions();
    const { data: champions } = getChampionResponse;
    this.setState({ champions: _.values(champions) });
  }

  render() {
    const { champions } = this.state;
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
                <Route
                  path="/champions"
                  render={() => <Champions champions={champions} />}
                />
                <Route
                  path="/summoner/:name"
                  render={props => (
                    <SummonerProfile champions={champions} {...props} />
                  )}
                />
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
