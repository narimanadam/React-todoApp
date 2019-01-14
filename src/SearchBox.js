import React, { Component } from "react";
import InputStyle from "../src/styles/InputStyle";

class SearchBox extends Component {
  render() {
    const {query, handleInputChange} = this.props;
    return (
      <form>
        <InputStyle
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
      </form>
    );
  }
}

export default SearchBox;
