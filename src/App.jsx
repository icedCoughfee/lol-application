import React, { Component } from "react";
import Champions from "./components/champions";
<<<<<<< HEAD
import ChampionProfile from "./components/championProfile";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/common/navbar";
import "./App.css";
=======
import Navbar from "./components/common/navbar";
>>>>>>> d597708ef47d71bf6e1e32c3c72ce1258b0bc1e4

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
<<<<<<< HEAD
        <BrowserRouter>
          <Navbar navItems={this.state.navItems} />
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
=======
        <Navbar />
        <div className="container-fluid">
          <Champions />
        </div>
>>>>>>> d597708ef47d71bf6e1e32c3c72ce1258b0bc1e4
      </React.Fragment>
    );
  }
}
export default App;
