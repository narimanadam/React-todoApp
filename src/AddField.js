import React, { Component } from "react";
import InputStyle from "../src/styles/InputStyle";

class AddField extends Component {
  render() {
    const { getInputValue } = this.props;
    return (
      <form>
        <InputStyle placeholder="Add to List" onChange={getInputValue}/>
      </form>
    );
  }
}

export default AddField;
