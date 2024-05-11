import { createGlobalStyle } from "styled-components";

// 1. :root
// 2. body
// 3. #root

const GlobalStyle = createGlobalStyle`

  // html
  :root {
    /* line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark; */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      /* background: #646464; */
      background: ${({theme}) => theme.colors.scrollthumb};
      border: 2px solid ${({theme}) => theme.colors.scrollborder};
      border-radius: 50px;
      /* border-radius: 50px; */
    }
    ::-webkit-scrollbar-track {
      background: ${({theme}) => theme.colors.scrolltrack};
      border: 0px none #ffffff;
      border-radius: 50px;
    }
  }
  
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; // by footer overflow-x

    background-color: ${({theme}) => theme.colors.background};
    background-image: ${({theme}) => theme.colors.backgroundimage};
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: center center;
    
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  // App.tsx container
  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  button {
    border-style: none;
    color: inherit; // button은 부모 color, background-color 를 상속받지 않는다.
    background-color:transparent;

    &:hover {
      filter: brightness(125%);
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyle;
