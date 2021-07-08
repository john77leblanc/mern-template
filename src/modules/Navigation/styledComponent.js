import styled from 'styled-components';


export const StyledComponent = styled.header`
  position: sticky;
  top: 0;
  padding: 0.8rem 2rem;
  background-color: white;
  box-shadow: 0 4px 8px ${(props) => props.theme.color.medium};
  z-index: 9999;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
  }

  .links ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
  }

  .links li {
    position: relative;
    padding: 0 0.8rem;

    :not(:last-child) {
      border-right: 1px solid #ccc;
    }

    :after {
      content: "";
      position: absolute;
      height: 4px;
      background-color: ${(props) => props.theme.color.primary};
      left: 15%;
      right: 15%;
      bottom: -50%;
      opacity: 0;
      transition: bottom 0.25s, opacity 0.25s;
    }

    :hover:after {
      bottom: -10%;
      opacity: 1;
    }

    a {
      display: block;
      padding: 0.8rem;
      text-decoration: none;
    }
  }
`;
