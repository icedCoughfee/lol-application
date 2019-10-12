import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import MasteryGrid from "./masteryGrid";
import Banner from "./common/banner";
import { getMostPlayedChampion } from "../fakeSummoners";
import { translateInconsistency } from "../constants/inconsistencies";
import MatchHistory from "./matchHistory";
import Loading from "./hoc/loading";

class SummonerProfile extends Component {
  state = {
    masteryVisbility: false,
    matchHistoryVisibility: false,
  };
  render() {
    const { champions } = this.props;
    const champion = getMostPlayedChampion(champions);
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
          onClick={() => this.handleToggleButtonContent("masteryVisbility")}
          aria-controls="masteryGrid"
          aria-expanded={this.state.masteryVisbility}
        >
          Champion Mastery
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() =>
            this.handleToggleButtonContent("matchHistoryVisibility")
          }
          aria-controls="matchHistory"
          aria-expanded={this.state.matchHistoryVisibility}
        >
          Match History
        </button>
        <Fade in={this.state.masteryVisbility}>
          <div className="fade" id="masteryGrid">
            <MasteryGrid champions={champions} />
          </div>
        </Fade>
        <Fade in={this.state.matchHistoryVisibility}>
          <div className="fade" id="matchHistory">
            <MatchHistory />
          </div>
        </Fade>
      </React.Fragment>
    );
  }

  handleToggleButtonContent = stateElementVisibility => {
    this.setState({
      [stateElementVisibility]: !this.state[stateElementVisibility],
    });
  };
}

export default Loading("champions")(SummonerProfile);
