import styled from "styled-components";

export const ButtonStyle = styled.button`
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
    cursor: pointer;
    outline: 0;
    box-shadow: none;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
  &.btn {
      &__icon {
        background: transparent;
        margin: 0;
        padding: 0;
      }
  }
`;