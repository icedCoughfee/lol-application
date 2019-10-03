import React, { Component } from "react";
import { getChampionMastery } from "../fakeSummoners";
import { getChampionById, getChampionTags } from "../champions";
import ChampionCard from "./championCard";
import { getMasteryTags } from "../mastery";
import ItemGrid from "./common/itemGrid";
import constants from "../constants/constants";

class SummonerProfile extends Component {
  render() {
    const masteries = [...getChampionMastery()].map(mastery => {
      const masteryWithCmastery = { ...mastery };
      const champion = { ...getChampionById(mastery.championId) };
      champion["mastery"] = masteryWithCmastery;
      return champion;
    });
    return (
      <ItemGrid
        items={masteries}
        itemFilterOptions={getChampionTags()}
        currentFilter={constants.DEFAULT_FILTER}
        sortOptions={getMasteryTags()}
        currentSortProperty={constants.DEFAULT_SORT}
        sortBaseProperties={"mastery"}
        searchQuery={""}
        searchProperty={"name"}
        cardType={ChampionCard}
        customCardClass={"champion-card"}
      />
    );
  }
}

export default SummonerProfile;
