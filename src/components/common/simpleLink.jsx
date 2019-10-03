import React from "react";
import { Link } from "react-router-dom";

const SimpleLink = props => {
  const { linkTo, item, classes } = props;
  return linkTo ? (
    <Link
      to={{
        pathname: linkTo,
        state: { item: item }
      }}
      className={classes}
    >
      {props.children}
    </Link>
  ) : (
    props.children
  );
};

export default SimpleLink;
