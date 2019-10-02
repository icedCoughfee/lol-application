import React, { Component } from "react";
import DropdownSelect from "./dropdownSelect";
import SearchBox from "./searchBox";
import _ from "lodash";

class ItemGrid extends Component {
  state = {
    items: this.props.items,
    itemFilterOptions: this.props.filterOptions,
    currentFilter: this.props.currentFilter,
    currentSortProperty: this.props.currentSortProperty,
    searchQuery: ""
  };
  render() {
    const {
      items,
      currentFilter,
      currentSortProperty,
      searchQuery
    } = this.state;

    const {
      itemFilterOptions,
      currentFilter: defaultFilter,
      sortOptions,
      currentSortProperty: defaultSort,
      sortBaseProperties,
      searchProperty,
      cardType: CardType,
      customCardClass
    } = this.props;

    // search
    let customizedItems = [...items].filter(item =>
      item[searchProperty].toLowerCase().includes(searchQuery.toLowerCase())
    );
    // filter (assumes item has a "tags" property)
    if (currentFilter !== defaultFilter) {
      customizedItems = customizedItems.filter(item =>
        item.tags.includes(currentFilter) ? item : null
      );
    }
    // sort
    customizedItems = this.customSort(
      sortBaseProperties.length
        ? `${sortBaseProperties}.` + currentSortProperty
        : currentSortProperty,
      customizedItems
    );

    const rows = _.chunk(customizedItems, 5);

    return (
      <React.Fragment>
        <div className="btn-group">
          <DropdownSelect
            options={itemFilterOptions}
            onDropdownChange={this.handleItemFilter}
            currentOption={currentFilter}
            defaultOption={defaultFilter}
          />
          <DropdownSelect
            options={sortOptions}
            onDropdownChange={this.handleItemSort}
            currentOption={currentSortProperty}
            defaultOption={defaultSort}
          />
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={this.handleItemReset}
          >
            Reset
          </button>
          <SearchBox value={searchQuery} onChange={this.handleItemSearch} />
        </div>
        {rows.map((row, index) => (
          <div key={index} className="row m-2">
            {row.map(item => (
              <div key={item.key} className="col">
                <CardType item={item} customCardClass={customCardClass} />
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }

  customSort = (prop, arr) => {
    prop = prop.split(".");
    var len = prop.length;

    arr.sort((a, b) => {
      var i = 0;
      while (i < len) {
        a = a[prop[i]];
        b = b[prop[i]];
        i++;
      }
      return b - a;
    });
    return arr;
  };

  handleItemReset = () => {
    this.setState({
      currentFilter: this.props.currentFilter,
      currentSortProperty: this.props.currentSortProperty,
      searchQuery: ""
    });
  };

  handleItemFilter = option => this.setState({ currentFilter: option });

  handleItemSort = option => this.setState({ currentSortProperty: option });

  handleItemSearch = query => this.setState({ searchQuery: query });
}

export default ItemGrid;
