import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { navItems, location } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
<<<<<<< HEAD

  navItemActive = (item, appLocation) =>
    item.path === appLocation ? "active" : "";
}

export default withRouter(Navbar);
=======
}

export default Navbar;
>>>>>>> d597708ef47d71bf6e1e32c3c72ce1258b0bc1e4
