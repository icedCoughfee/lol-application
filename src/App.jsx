import React, { Component } from "react";
import "./App.css";
import Champions from "./components/champions";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Champions />
      </div>
    );
  }
}
export default App;
