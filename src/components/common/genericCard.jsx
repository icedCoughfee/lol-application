import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const GenericCard = props => {
  const { item, title, description, imgSrc, linkText, linkTo } = props;
  return (
    <div className="card" style={{ width: "24rem", margin: "auto" }}>
      <img src={imgSrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link
          to={{
            pathname: linkTo,
            state: { item: item },
          }}
          className="btn btn-primary"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GenericCard;
