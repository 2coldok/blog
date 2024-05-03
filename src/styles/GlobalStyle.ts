import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // html
  :root {
    /* background-color: red; */

    /* line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark; */
    // 스크롤바
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #646464;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #646464;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #939393;
    }
    ::-webkit-scrollbar-track {
      background: #292929;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #292929;
    }
    ::-webkit-scrollbar-track:active {
      background: #292929;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; // footer 생성시 x overflow생성됨
    
    // font style
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    text-rendering: optimizeLegibility;

    // 스크롤바
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #646464;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #646464;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #939393;
    }
    ::-webkit-scrollbar-track {
      background: #292929;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #292929;
    }
    ::-webkit-scrollbar-track:active {
      background: #292929;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    // 깃발
    background-color: ${({theme}) => theme.colors.background};
    background-image: ${({theme}) => theme.colors.backgroundimage};
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: center center;
    //
  }

  // App.tsx container
  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* max-width: 1100px; */
    

    // 깃발
    /* background-color: ${({theme}) => theme.colors.background}; */
    //

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
