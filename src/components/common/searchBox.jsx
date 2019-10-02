import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="email"
        className="form-control m-2"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Search Champions"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    );
  }
}

export default SearchBox;
