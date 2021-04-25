import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: rgba(122, 87, 253, 1);
    color: #fff;
    -webkit-font-smoothing: antialiased;
    position: relative;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  button {
    cursor: pointer;
  }
`;
