import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import MasteryGrid from "./masteryGrid";
import Banner from "./common/banner";
import { getMostPlayedChampion } from "../fakeSummoners";
import { translateInconsistency } from "../constants/inconsistencies";

class SummonerProfile extends Component {
  state = {
    masteryVisbility: false,
  };
  render() {
    const champion = getMostPlayedChampion();
    const { name, title, id } = champion;
    const cleanChampId = translateInconsistency(id);
    const imgSrc = `${process.env.REACT_APP_CHAMPION_SPLASH_URL}/${cleanChampId}_0.jpg`;
    return (
      <React.Fragment>
        <Banner
          title={name}
          subtitle={title}
          imgSrc={imgSrc}
          classes={"basic-banner"}
        />
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
