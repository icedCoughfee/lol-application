import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import MasteryGrid from "./masteryGrid";
import Banner from "./common/banner";
import { getMostPlayedChampion } from "../fakeSummoners";
import { translateInconsistency } from "../constants/inconsistencies";
import MatchHistory from "./matchHistory";
import Loading from "./hoc/loading";
import { getChampionMastery } from "../services/masteryService";
import { getSummoner } from "../services/summonerService";
import _ from "lodash";

class SummonerProfile extends Component {
  state = {
    masteryVisbility: false,
    matchHistoryVisibility: false,
    masteries: [],
    summoner: {},
  };

  async componentDidMount() {
    const summonerName = this.props.match.params.name;
    const masteries = await getChampionMastery(summonerName);
    const summoner = await getSummoner(summonerName);
    this.setState({ masteries, summoner });
  }

  render() {
    const { champions } = this.props;
    const { masteries, summoner } = this.state;
    const displayName = summoner.name;
    // start most played banner creation
    let MP_Banner = () => (
      <Banner
        title={displayName}
        subtitle={""}
        imgSrc={""}
        classes={"basic-banner"}
      />
    );
    if (!_.isEmpty(champions) && !_.isEmpty(masteries)) {
      const champion = getMostPlayedChampion(masteries, champions);
      const { title, id } = champion;
      const cleanChampId = translateInconsistency(id);
      const imgSrc = `${process.env.REACT_APP_CHAMPION_SPLASH_URL}/${cleanChampId}_0.jpg`;
      MP_Banner = () => (
        <Banner
          title={displayName}
          subtitle={title}
          imgSrc={imgSrc}
          classes={"basic-banner"}
        />
      );
    }

    return (
      <React.Fragment>
        <MP_Banner />
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
            <MasteryGrid champions={champions} masteries={masteries} />
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
