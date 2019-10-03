import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import SimpleLink from "./simpleLink";
import { link } from "fs";

const ItemCard = props => {
  const { item, imgSrc, linkTo, customCardClass } = props;
  return (
    <div
      className={`card ${customCardClass}`}
      style={{ width: "24rem", margin: "auto" }}
    >
      <SimpleLink linkTo={linkTo} item={item} className="">
        <img src={imgSrc} className="card-img-top" alt="" />
      </SimpleLink>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default ItemCard;
