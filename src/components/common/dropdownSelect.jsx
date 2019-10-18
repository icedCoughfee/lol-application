import React, { Component } from "react";

class DropdownSelect extends Component {
  state = {
    isExpanded: false
  };
  render() {
    const {
      options,
      onDropdownChange,
      currentOption,
      defaultOption
    } = this.props;
    const classes = this.state.isExpanded ? "show" : "";
    return (
      <div className={`dropdown m-2 ${classes}`}>
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.state.isExpanded}
          onClick={() => this.handleToggle()}
        >
          {currentOption}
        </button>
        <div
          className={`dropdown-menu ${classes}`}
          aria-labelledby="dropdownMenuButton"
          onMouseLeave={() => this.handleToggle()}
        >
          <a
            className="dropdown-item"
            onClick={() => onDropdownChange(defaultOption)}
          >
            {defaultOption}
          </a>
          {options.map(option => (
            <a
              key={option}
              className="dropdown-item"
              onClick={() => onDropdownChange(option)}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    );
  }

  handleToggle = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };
}

export default DropdownSelect;
