import React, { Component } from "react";
import {
  getChampions,
  getChampionTags,
  getChampionStatNames
} from "../champions";
import ChampionCard from "./championCard";
import DropdownSelect from "./common/dropdownSelect";
import _ from "lodash";

class Champions extends Component {
  state = {
    champions: getChampions(),
    championTags: getChampionTags(),
    stats: getChampionStatNames(),
    currentFilter: "All Champions",
    currentSort: "Sort"
  };
  render() {
    const initialFilter = "All Champions";
    const initialSort = "Sort by stat";
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
}

export default Champions;
