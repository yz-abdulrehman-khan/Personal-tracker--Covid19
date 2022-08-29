import { createGlobalStyle } from 'styled-components';
import { COLOR, BP } from './constants';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind/Hind-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind/Hind-Medium.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Hind';
    src: url('/fonts/Hind/Hind-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  * {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Hind', sans-serif;
    color: ${COLOR.GREY_TEXT_DARK};
    overflow-x: hidden;
  }
  button, input {
    font-family: 'Hind', sans-serif;
  }
  button, ul {
    padding: 0;
  }
  a {
    color: ${COLOR.GREY_TEXT_DARK};
    text-decoration: none;
  }
  h1, h2 {
    font-weight: 500;
    margin: 0;
  }
  h1 {
    font-size: 3rem;
    @media (max-width: ${BP.MOBILE}) {
      font-size: 2.5rem;
    }
  }
  h2 {
    color: ${COLOR.GREY_TEXT_LIGHT};
    font-size: 1.8rem;
  }
  
`;

export default GlobalStyle;