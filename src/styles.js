import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 25px;
    padding: 0;
    background: #F2F1EF;
  }
  ul {
    padding-left: 0;
  }

  h2 {
    margin: 0;
  }
  .App {
    font-family: sans-serif;
    text-align: center;
  }
  .loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
   `;

export default GlobalStyle;
