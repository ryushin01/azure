import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import JimNightshade from '/fonts/JimNightshade-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "JimNightshade";
    src: local("JimNightshade"), local("JimNightshade");
    font-style: normal;
    src: url(${JimNightshade}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.neutralA};
    color: ${props => props.theme.neutralF};
    font-family: "JimNightshade", "AppleSDGothicNeo", "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    background-color: transparent;
    border: 0 none;
    cursor: pointer;
  }
  
  #root {  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
