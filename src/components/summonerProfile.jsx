import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import MasteryGrid from "./masteryGrid";

class SummonerProfile extends Component {
  state = {
    masteryVisbility: false,
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleToggleMasteryVisibility()}
          aria-controls="masteryGrid"
          aria-expanded={this.state.masteryVisbility}
        >
          Champion Mastery
        </button>
        <Fade in={this.state.masteryVisbility}>
          <div className="fade" id="masteryGrid">
            <MasteryGrid />
          </div>
        </Fade>
      </React.Fragment>
    );
  }

  handleToggleMasteryVisibility = () => {
    this.setState({ masteryVisbility: !this.state.masteryVisbility });
  };
}

export default SummonerProfile;
