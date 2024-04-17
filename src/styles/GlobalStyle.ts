import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // html
  :root {
    background-color: red;

    /* line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark; */
  }
  
  body {
    background-color: coral;
    

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
    // font style
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
    max-width: 1100px;

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
