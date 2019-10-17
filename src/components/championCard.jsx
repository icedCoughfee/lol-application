import React, { Component } from "react";
import { translateInconsistency } from "../constants/inconsistencies";
import ItemCard from "./common/itemCard";
import SimpleLink from "./common/simpleLink";
import _ from "lodash";

class ChampionCard extends Component {
  render() {
    const { item: champion } = this.props;
    const pathname = `/champions/${champion.name}`;
    const cleanChampId = translateInconsistency(champion.id);
    const champTitle = `${champion.name}${"," + _.capitalize(champion.title) ||
      ""}`;
    const imgSrc = `${process.env.REACT_APP_CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`;
    return (
      <ItemCard
        item={champion}
        title={champTitle}
        description={champion.title}
        imgSrc={imgSrc}
        linkText={"Learn More"}
        linkTo={pathname}
        customCardClass={"champion-card"}
      >
        <h5 className="card-title">{champTitle}</h5>
        <p className="card-text">{champion.title}</p>
        <SimpleLink linkTo={pathname} classes="btn btn-primary">
          {pathname ? "Learn More" : ""}
        </SimpleLink>
      </ItemCard>
    );
  }
}

export default ChampionCard;
