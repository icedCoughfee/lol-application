import React, { Component } from "react";
import Champions from "./components/champions";
import ChampionProfile from "./components/championProfile";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-fluid">
            <Switch>
              <Route
                path="/champions/:name"
                render={props => <ChampionProfile {...props} />}
              />
              <Route path="/champions" component={Champions} />
              <Route path="/" component={Champions} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
