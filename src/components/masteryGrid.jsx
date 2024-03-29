import React, { Component } from "react";

import { getChampionById, getChampionTags } from "../champions";
import MasteryCard from "./masteryCard";
import { getMasteryTags } from "../mastery";
import ItemGrid from "./common/itemGrid";
import constants from "../constants/constants";

class MasteryGrid extends Component {
  render() {
    const { champions, masteries } = this.props;
    const summonerMasteries = masteries.map(mastery => {
      const masteryWithCmastery = { ...mastery };
      const champion = { ...getChampionById(champions, mastery.championId) };
      champion["mastery"] = masteryWithCmastery;
      return champion;
    });
    return (
      <ItemGrid
        items={summonerMasteries}
        itemFilterOptions={getChampionTags()}
        currentFilter={constants.DEFAULT_FILTER}
        sortOptions={getMasteryTags()}
        currentSortProperty={"Sort"}
        sortBaseProperties={"mastery"}
        searchQuery={""}
        searchProperty={"name"}
        cardType={MasteryCard}
        customCardClass={"champion-card"}
      />
    );
  }
}

export default MasteryGrid;
