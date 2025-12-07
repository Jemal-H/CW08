import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  onFilter = (event) => {
    this.setState({ type: event });
  }

  filterItem = (item) => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && 
           (this.state.type === "All" || item.type === this.state.type);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <DropdownButton
          title={this.state.type}
          id="dropdown-basic"
          onSelect={this.onFilter}
        >
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
        </DropdownButton>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
