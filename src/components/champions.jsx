import React, { Component } from "react";
import { getChampions } from "../champions";
import ChampionCard from "./championCard";
import _ from "lodash";

class Champions extends Component {
  state = {
    champions: getChampions(),
  };
  render() {
    const rows = _.chunk(this.state.champions, 4);
    return (
      <React.Fragment>
        {rows.map(row => (
          <div className="row m-2">
            {row.map(champion => (
              <div className="col-3">
                <ChampionCard key={champion.key} champion={champion} />
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Champions;
