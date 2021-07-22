import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.primary};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  *,
  *:before,
  *:after {
    font-size: inherit;
    box-sizing: border-box;
    transition: background-color 0.25s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  main {
    animation: fadein 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.color.secondary};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.color.medium};
  }

  .m-auto {
    margin: auto;
  }

  [class*="button"] {
    display: block;
    width: max-content;
    border-radius: 8px;
    text-decoration: none;
    text-shadow: none;
    padding: 0.8rem 2rem;
  }

  .background-light {
    background-color: ${(props) => props.theme.background.light};
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

  .d-flex {
    display: flex;
    justify-content: space-around;
  }

  .message-area {
    padding: 5rem 10%;
  }

  form {
    [type="text"] {
      border: 2px solid ${(props) => props.theme.color.light};
      border-radius: 3px;
      width: 100%;
      padding: 10px;
      transition: border 0.25s;
      
      :hover {
        border-color: ${(props) => props.theme.color.secondary}
      }

      :focus {
        border-color: ${(props) => props.theme.color.secondary}
      }
    }
  }
`;

export default GlobalStyle;
