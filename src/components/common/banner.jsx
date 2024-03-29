import React from "react";
import utility from "./utility/component-actions";
import PropTypes from "prop-types";

const Banner = props => {
  const { title, subtitle, imgSrc, classes } = props;
  const styles = {
    backgroundImage: `url(${imgSrc})`
  };

  return (
    <div
      className={`jumbotron jumbotron-fluid ${classes}`}
      style={styles}
      onContextMenu={utility.noContextMenu}
    >
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  classes: PropTypes.string
};

export default Banner;
