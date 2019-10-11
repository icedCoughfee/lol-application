import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import constants from "../../constants/constants";

class Navbar extends Component {
  state = {
    mobile: false,
  };
  render() {
    const { navItems, location } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <img src={constants.DEFAULT_ICON} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={this.state.mobile}
          aria-label="Toggle navigation"
          onClick={() => this.toggleMobile()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            this.state.mobile ? "show" : ""
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li
              className={`nav-item ${this.navItemActive(
                "/",
                location.pathname
              )}`}
            >
              <Link to={"/"} className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {navItems.map(item => (
              <li
                key={item.name}
                className={`nav-item ${this.navItemActive(
                  item,
                  location.pathname
                )}`}
              >
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  navItemActive = (item, appLocation) =>
    item.path === appLocation ? "active" : "";

  toggleMobile = () => {
    this.setState({ mobile: !this.state.mobile });
  };
}

export default withRouter(Navbar);
