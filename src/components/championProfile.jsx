import React, { Component } from "react";
import _ from "lodash";

class ChampionProfile extends Component {
  render() {
    const { history, location, match } = this.props;
    const { item: champion } = location.state;

    const titleCaseName = _.words(champion.title)
      .map(word => _.capitalize(word))
      .reduce((acc, word) => `${acc} ${word}`);

    const bg =
      "https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-ahri.jpg";
    const styles = {
      backgroundImage: `url(${bg ? bg : ""})`,
    };

    // scale
    const teemoUnit = 110;

    return (
      <React.Fragment>
        <div
          className="jumbotron p-4 p-md-5 text-white rounded bg-dark"
          style={styles}
        >
          <div className="container">
            <h1 className="display-4">{champion.name}</h1>
            <p className="lead">{titleCaseName}</p>
          </div>
        </div>
        <p>{champion.blurb}</p>
        <p>base stats</p>
        <ul>
          {Object.entries(champion.stats).map(statKV => {
            const statName = statKV[0];
            const statValue = statKV[1];
            return (
              <li key={statName}>
                {statName}:
                {statName.includes("perlevel")
                  ? `${statValue} (${statValue * 16} at level 16)`
                  : statValue}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default ChampionProfile;
