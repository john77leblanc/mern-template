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
    transition: background-color 0.25s;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h1 {
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.color.primary}
  }

  [class*="button"] {
    display: inline-block;
    border-radius: 8px;
    text-decoration: none;
    text-shadow: none;
    padding: 0.8rem 2rem;
  }

  .button-light {
    color: white;
    background-color: ${(props) => props.theme.color.secondary};

    :hover {
      background-color: ${(props) => props.theme.color.primary}
    }
  }

  .content-area {
    padding: 2rem 10%;
  }

  .card-holder {
    display: flex;
    justify-content: space-around;
  }
`;

export default GlobalStyle;
