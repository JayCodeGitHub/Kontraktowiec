import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Verdana';
    font-weight: 700;
    background-color: #171717;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Verdana';
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;