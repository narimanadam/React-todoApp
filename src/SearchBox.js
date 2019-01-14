import React, { Component } from "react";
import InputStyle from "../src/styles/InputStyle";

class SearchBox extends Component {
  render() {
    return (
      <form>
        <InputStyle
          type="text"
          placeholder="Search"
          value={this.props.query}
          onChange={this.props.onchange}
          onBlur={this.props.onchange}
        />
      </form>
    );
  }
}

export default SearchBox;
