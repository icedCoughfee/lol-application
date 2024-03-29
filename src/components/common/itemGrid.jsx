import React, { Component } from "react";
import DropdownSelect from "./dropdownSelect";
import SearchBox from "./searchBox";
import _ from "lodash";

class ItemGrid extends Component {
  state = {
    itemFilterOptions: this.props.filterOptions,
    currentFilter: this.props.currentFilter,
    currentSortProperty: this.props.currentSortProperty,
    searchQuery: ""
  };
  render() {
    const { currentFilter, currentSortProperty, searchQuery } = this.state;

    const {
      items,
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
    let customizedItems = [...items].filter(item => {
      const itemVal = _.get(item, searchProperty);
      return itemVal
        ? itemVal.toLowerCase().includes(searchQuery.toLowerCase())
        : false;
    });
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
        <div className="card-container">
          {customizedItems.map((item, index) => (
            <CardType
              key={index}
              item={item}
              customCardClass={customCardClass}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }

  customSort = (prop, arr) => {
    arr.sort((a, b) => {
      return _.get(b, prop) - _.get(a, prop);
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
