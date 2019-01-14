import styled from "styled-components";

const InputStyle = styled.input`
  border: none;
  width: 300px;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  font-size: 22px;
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export default InputStyle;
