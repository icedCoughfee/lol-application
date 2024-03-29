import React, { Component } from "react";
import { getChampionTags, getChampionStatNames } from "../champions";
import constants from "../constants/constants";
import _ from "lodash";
import ItemGrid from "./common/itemGrid";
import ChampionCard from "./championCard";

class Champions extends Component {
  render() {
    const { champions } = this.props;
    return (
      <ItemGrid
        items={champions}
        itemFilterOptions={getChampionTags()}
        currentFilter={constants.DEFAULT_FILTER}
        sortOptions={getChampionStatNames(champions)}
        currentSortProperty={constants.DEFAULT_SORT}
        sortBaseProperties={"stats"}
        searchQuery={""}
        searchProperty={"name"}
        cardType={ChampionCard}
        customCardClass={"champion-card"}
      />
    );
  }

  handleChampionReset = () => {
    this.setState({
      currentFilter: constants.DEFAULT_FILTER,
      currentSort: constants.DEFAULT_SORT,
    });
  };

  handleChampionFilter = option => this.setState({ currentFilter: option });

  handleChampionSort = option => this.setState({ currentSort: option });

  handleChampionSearch = query => this.setState({ searchQuery: query });
}

export default Champions;
