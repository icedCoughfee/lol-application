import React, { Component } from "react";
import {
  getChampions,
  getChampionTags,
  getChampionStatNames
} from "../champions";
import ChampionCard from "./championCard";
import DropdownSelect from "./common/dropdownSelect";
import SearchInput from "./common/searchBox";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Champions extends Component {
  state = {
    champions: getChampions(),
    championTags: getChampionTags(),
    stats: getChampionStatNames(),
    currentFilter: "All Champions",
    currentSort: "Sort",
    searchQuery: ""
  };
  render() {
    const initialFilter = "All Champions";
    const initialSort = "Sort by stat";

    // instead of altering that state.champions here, consider state.champions to be "all champions".
    // we can then do our calculations here, filter, sort, search and then send them into render as to not change our base information.

    const rows = _.chunk(this.state.champions, 5);
    return (
      <React.Fragment>
        <DropdownSelect
          options={this.state.championTags}
          onDropdownChange={this.handleChampionFilter}
          currentOption={this.state.currentFilter}
          defaultOption={initialFilter}
        />
        <DropdownSelect
          options={this.state.stats}
          onDropdownChange={this.handleChampionSort}
          currentOption={this.state.currentSort} // genericize this option
          defaultOption={initialSort}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleChampionReset}
        >
          Reset
        </button>
        <SearchBox onChange={this.handleChampionSearch} />
        {rows.map((row, index) => (
          <div key={index} className="row m-2">
            {row.map(champion => (
              <div key={champion.key} className="col">
                <ChampionCard champion={champion} />
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }

  handleChampionReset = () => {
    this.setState({
      champions: [...getChampions()],
      currentFilter: "All Champions",
      currentSort: "Sort by stat"
    });
  };

  handleChampionFilter = option => {
    let champions = [];
    if (option === "All Champions") {
      champions = getChampions();
    } else {
      champions = [...getChampions()].filter(champion =>
        champion.tags.includes(option) ? champion : null
      );
    }
    this.setState({ champions, currentFilter: option });
  };

  handleChampionSort = option => {
    const champions = [...getChampions()].sort(
      (champA, champB) => champA.stats[option] - champB.stats[option]
    );
    this.setState({ champions, currentSort: option });
  };

  handleChampionSearch = query => {
    const champions = [...getChampions()].filter(champion =>
      champion.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ champions, searchQuery: query });
  };
}

export default Champions;
