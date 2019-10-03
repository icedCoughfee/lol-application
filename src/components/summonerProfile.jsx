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
      const copy = { ...mastery };
      copy["champion"] = { ...getChampionById(mastery.championId) };
      return copy;
    });
    // console.log(masteries);
    const { summoner } = this.props;
    return (
      //   <h1>hello</h1>
      <ItemGrid
        items={masteries}
        itemFilterOptions={getChampionTags()}
        currentFilter={constants.DEFAULT_FILTER}
        sortOptions={getMasteryTags()}
        currentSortProperty={constants.DEFAULT_SORT}
        sortBaseProperties={""}
        searchQuery={""}
        searchProperty={"champion.name"}
        cardType={ChampionCard}
        customCardClass={"champion-card"}
      />
    );

    // masteries.map(mastery => (
    //   <ChampionCard
    //     key={mastery.championId}
    //     champion={getChampionById(mastery.championId)}
    //   />
    // ));
  }
}

export default SummonerProfile;
