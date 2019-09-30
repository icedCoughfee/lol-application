import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import ChampionProfile from "./championProfile";

class ChampionCard extends Component {
  render() {
    const { champion } = this.props;
    const pathname = `/champions/${champion.name}`;
    return (
      <div className="card" style={{ width: "24rem", margin: "auto" }}>
        <img
          src={`../../img/champion/tiles/${champion.name}_0.jpg`}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {champion.name},{_.capitalize(champion.title)}
          </h5>
          <p className="card-text">{champion.title}</p>
          <Link
            to={{
              pathname: pathname,
              state: { champion: champion }
            }}
            className="btn btn-primary"
          >
            Explore
          </Link>
        </div>
      </div>
    );
  }
}

export default ChampionCard;
