import React, { Component } from "react";
import { getChampionMastery } from "../fakeSummoners";
import { getChampionById, getChampionStatNames } from "../champions";
import ChampionCard from "./championCard";

class SummonerProfile extends Component {
  render() {
    const masteries = getChampionMastery();
    const { summoner } = this.props;
    return masteries.map(mastery => (
      <ChampionCard champion={getChampionById(mastery.championId)} />
    ));
  }
}

export default SummonerProfile;
