import React, { Component } from "react";
import InputStyle from "../src/styles/InputStyle";

class AddField extends Component {
  render() {
    return (
      <form>
        <InputStyle placeholder="Add to List" onChange={this.props.onchange}/>
      </form>
    );
  }
}

export default AddField;
