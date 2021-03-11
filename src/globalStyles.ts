import { createGlobalStyle } from 'styled-components';
import bgimg from './assets/bgimg.jpg';

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
  .App{
    background-image: url(${bgimg});
    font-family: 'Playfair Display', serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
