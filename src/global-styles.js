import { createGlobalStyle } from "styled-components";
import Inter from "./src/asserts/fonts/Inter/Inter-VariableFont_slnt,wght.ttf";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'Inter';
  }
  
  a{
    text-decoration: none;
  }

  h1 {
    font-family: 'Inter';

  }

  h2 {
    font-family: 'Inter';

  }
`;
