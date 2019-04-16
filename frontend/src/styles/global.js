import { createGlobalStyle } from "styled-components";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: none;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
  body {
    background: #24202c;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
