import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.primary};
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    font-size: inherit;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: auto;
  }

  h1 {
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    color: ${(props) => props.theme.color.primary}
  }
`;

export default GlobalStyle;
