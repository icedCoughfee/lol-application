import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const ItemCard = props => {
  const { item, imgSrc, linkTo, customCardClass } = props;
  return (
    <div
      className={`card ${customCardClass}`}
      style={{ width: "24rem", margin: "auto" }}
    >
      <Link
        to={{
          pathname: linkTo,
          state: { item: item }
        }}
        className=""
      >
        <img src={imgSrc} className="card-img-top" alt="" />
      </Link>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default ItemCard;
