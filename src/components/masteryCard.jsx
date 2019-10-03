import React, { Component } from "react";
import constants from "../constants/constants";
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
      lastPlayTime,
      championPointsSinceLastLevel,
      championPointsUntilNextLevel
    } = champion.mastery;
    const cleanChampId = translateInconsistency(champion.id);
    const imgSrc = `${constants.CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`;

    // champion mastery progress
    const progress = Math.floor(
      (championPointsSinceLastLevel * 100) /
        (championPointsSinceLastLevel + championPointsUntilNextLevel)
    );
    return (
      <ItemCard
        item={champion}
        imgSrc={imgSrc}
        customCardClass={"champion-card"}
      >
        <h2>
          <b>LEVEL {championLevel}</b>
        </h2>
        <p>
          <h4>{championPoints} Champion Points</h4>
        </p>
        <p>Last Played: {this.getLastPlayed()}</p>
        <ProgressBar completionPct={progress} />
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
