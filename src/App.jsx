import React, { Component } from "react";
import "./App.css";
import Champions from "./components/champions";
import Navbar from "./components/common/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid">
          <Champions />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
