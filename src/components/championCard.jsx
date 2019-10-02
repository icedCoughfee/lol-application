import React, { Component } from "react";
import { Link } from "react-router-dom";
import constants from "../constants/constants";
import { translateInconsistency } from "../constants/inconsistencies";
import _ from "lodash";
import GenericCard from "./common/genericCard";

class ChampionCard extends Component {
  render() {
    const { champion } = this.props;
    const pathname = `/champions/${champion.name}`;
    const cleanChampId = translateInconsistency(champion.id);
    const champTitle = `${champion.name}${"," + _.capitalize(champion.title) ||
      ""}`;
    const imgSrc = `${constants.CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`;
    return (
      <GenericCard
        item={champion}
        title={champTitle}
        description={champion.title}
        imgSrc={imgSrc}
        linkText={"Learn More"}
        linkTo={pathname}
      />
    );
  }
  //   render() {
  //     const { champion } = this.props;
  //     const pathname = `/champions/${champion.name}`;
  //     const cleanChampId = translateInconsistency(champion.id);
  //     return (
  //       <div className="card" style={{ width: "24rem", margin: "auto" }}>
  //         <img
  //           src={`${constants.CHAMPION_TILES_URL}/${cleanChampId}_0.jpg`}
  //           className="card-img-top"
  //           alt=""
  //         />
  //         <div className="card-body">
  //           <h5 className="card-title">
  //             {champion.name},{_.capitalize(champion.title)}
  //           </h5>
  //           <p className="card-text">{champion.title}</p>
  //           <Link
  //             to={{
  //               pathname: pathname,
  //               state: { champion: champion }
  //             }}
  //             className="btn btn-primary"
  //           >
  //             Learn more
  //           </Link>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default ChampionCard;
