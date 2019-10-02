import React, { Component } from "react";
import {
  getChampions,
  getChampionTags,
  getChampionStatNames
} from "../champions";
import constants from "../constants/constants";
import _ from "lodash";
import ItemGrid from "./common/itemGrid";
import ChampionCard from "./championCard";

class Champions extends Component {
  // state = {
  //   champions: getChampions(),
  //   championTags: getChampionTags(),
  //   stats: getChampionStatNames(),
  //   currentFilter: constants.DEFAULT_FILTER,
  //   currentSort: constants.DEFAULT_SORT,
  //   searchQuery: ""
  // };
  render() {
    // TODO: extract this as a component intended to be on multiple pages
    // how many filters are we allowed to have?
    // should this be an extendable component or should we just pass parameters through this component?
    // should the original component just be a grid component that creates cards?

    // SORT AND RESET DO NOT WORK

    // const {
    //   champions,
    //   championTags,
    //   stats,
    //   currentFilter,
    //   currentSort,
    //   searchQuery
    // } = this.state;

    return (
      <ItemGrid
        items={getChampions()}
        itemFilterOptions={getChampionTags()}
        currentFilter={constants.DEFAULT_FILTER}
        sortOptions={getChampionStatNames()}
        currentSortProperty={constants.DEFAULT_SORT}
        sortBaseProperties={"stats"}
        searchQuery={""}
        searchProperty={"name"}
        cardType={ChampionCard}
      />
    );
  }
  // render() {
  //   // TODO: extract this as a component intended to be on multiple pages
  //   // how many filters are we allowed to have?
  //   // should this be an extendable component or should we just pass parameters through this component?
  //   // should the original component just be a grid component that creates cards?
  //   const {
  //     champions,
  //     championTags,
  //     stats,
  //     currentFilter,
  //     currentSort,
  //     searchQuery,
  //   } = this.state;

  //   // search
  //   let customizedChampions = [...champions].filter(champion =>
  //     champion.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   // filter
  //   if (currentFilter !== constants.DEFAULT_FILTER) {
  //     customizedChampions = customizedChampions.filter(champion =>
  //       champion.tags.includes(currentFilter) ? champion : null
  //     );
  //   }
  //   // sort
  //   customizedChampions = customizedChampions.sort(
  //     (champA, champB) => champA.stats[currentSort] - champB.stats[currentSort]
  //   );
  //   const rows = _.chunk(customizedChampions, 5);

  //   return (
  //     <React.Fragment>
  //       <DropdownSelect
  //         options={championTags}
  //         onDropdownChange={this.handleChampionFilter}
  //         currentOption={currentFilter}
  //         defaultOption={constants.DEFAULT_FILTER}
  //       />
  //       <DropdownSelect
  //         options={stats}
  //         onDropdownChange={this.handleChampionSort}
  //         currentOption={currentSort}
  //         defaultOption={constants.DEFAULT_SORT}
  //       />
  //       <button
  //         type="button"
  //         className="btn btn-danger"
  //         onClick={this.handleChampionReset}
  //       >
  //         Reset
  //       </button>
  //       <SearchBox onChange={this.handleChampionSearch} />
  //       {rows.map((row, index) => (
  //         <div key={index} className="row m-2">
  //           {row.map(champion => (
  //             <div key={champion.key} className="col">
  //               <ChampionCard champion={champion} />
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </React.Fragment>
  //   );
  // }

  // sort
  // customizedChampionSort = (champA, champB) =>
  //   champA.stats[sortProperty] - champB.stats[sortProperty];

  handleChampionReset = () => {
    this.setState({
      currentFilter: constants.DEFAULT_FILTER,
      currentSort: constants.DEFAULT_SORT
    });
  };

  handleChampionFilter = option => this.setState({ currentFilter: option });

  handleChampionSort = option => this.setState({ currentSort: option });

  handleChampionSearch = query => this.setState({ searchQuery: query });
}

export default Champions;
