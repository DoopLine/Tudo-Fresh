import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/Raleway-Regular.ttf";

export default createGlobalStyle`

    @font-face {
        font-family:  'Raleway';
        src: url(${font});
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
    }
    
  html{
      font: 62.5% 'Raleway', sans-serif;
      font-size: 1.6rem;
      overflow-x: hidden;
      height: 100%;
  }

  body, #root{
      height: 100%;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
  }

  .truncate{
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .flex-img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
