import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 20px;
  background: #003171;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    pointer: cursor;
    outline: 0;
    box-shadow: none;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`;

class Button extends Component {
  render() {
    const { text, addItem, disabled } = this.props;
    return (
      <div>
        <ButtonStyle disabled={disabled} onClick={addItem}>{text}</ButtonStyle>
      </div>
    );
  }
}

export default Button;
