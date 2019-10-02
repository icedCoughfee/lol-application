import React, { Component } from "react";
import constants from "../constants/constants";
import { translateInconsistency } from "../constants/inconsistencies";
import _ from "lodash";
import ItemCard from "./common/itemCard";

class ChampionCard extends Component {
  render() {
    const { item: champion } = this.props;
    const pathname = `/champions/${champion.name}`;
    const cleanChampId = translateInconsistency(champion.id);
    const champTitle = `${champion.name}${"," + _.capitalize(champion.title) ||
      ""}`;
    const imgSrc = `${constants.CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`;
    return (
      <ItemCard
        item={champion}
        title={champTitle}
        description={champion.title}
        imgSrc={imgSrc}
        linkText={"Learn More"}
        linkTo={pathname}
        customCardClass={"champion-card"}
      />
    );
  }
}

export default ChampionCard;
