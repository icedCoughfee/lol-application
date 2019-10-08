import React from "react";
import _ from "lodash";
import SimpleLink from "./simpleLink";

const ItemCard = props => {
  const { item, imgSrc, linkTo, customCardClass } = props;
  return (
    <div className={`card ${customCardClass}`}>
      <SimpleLink linkTo={linkTo} item={item} className="">
        <img src={imgSrc} className="card-img-top" alt="" />
      </SimpleLink>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default ItemCard;
