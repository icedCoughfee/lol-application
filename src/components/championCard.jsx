import React, { Component } from "react";
import _ from "lodash";

class ChampionCard extends Component {
  render() {
    const { champion } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
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
          <a href="#" className="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
    );
  }
}

export default ChampionCard;
