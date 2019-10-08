import React, { Component } from "react";
import { translateInconsistency } from "../constants/inconsistencies";
import ItemCard from "./common/itemCard";
import ProgressBar from "./common/progressBar";
import _ from "lodash";

class MasteryCard extends Component {
  render() {
    const { item: champion } = this.props;
    const {
      championLevel,
      championPoints,
      championPointsSinceLastLevel,
      championPointsUntilNextLevel,
    } = champion.mastery;
    const cleanChampId = translateInconsistency(champion.id);
    const imgSrc = `${process.env.REACT_APP_CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`;

    // champion mastery progress
    const progress = Math.floor(
      (championPointsSinceLastLevel * 100) /
        (championPointsSinceLastLevel + championPointsUntilNextLevel)
    );
    return (
      <ItemCard
        item={champion}
        imgSrc={imgSrc}
        customCardClass={"mastery-card champion-card"}
      >
        <span className="bolder">LEVEL {championLevel}</span>
        <span className="bold-light">{championPoints} Champion Points</span>
        <span>Last Played: {this.getLastPlayed()}</span>
        <ProgressBar label={"Max"} completionPct={progress} />
      </ItemCard>
    );
  }

  getLastPlayed = () => {
    const lastPlayedGMT = new Date(this.props.item.mastery.lastPlayTime);
    return `${lastPlayedGMT.getMonth() +
      1}/${lastPlayedGMT.getDate()}/${lastPlayedGMT.getFullYear()}`;
  };
}
export default MasteryCard;
