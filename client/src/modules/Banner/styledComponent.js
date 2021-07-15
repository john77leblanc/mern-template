import styled from 'styled-components';


const height = '500px';

export const StyledComponent = styled.div`
  position: relative;
  height: ${height};
  padding: 1rem 10%;
  background-attachment: fixed;
  background-color: ${(props) => props.theme.color.primary};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  display: flex;
  flex-direction: flex-start;
  align-items: center;

  text-shadow: 0 2px 4px ${(props) => props.theme.color.dark};

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.color.dark};
    opacity: ${(props) => props.theme.contrast};
  }

  div {
    width: 40%;
    z-index: 1;
  }

  h1 {
    font-family: ${(props) => props.theme.font.primary};
    color: white;
    font-size: 3rem;
    font-weight: 800;
  }

  p {
    color: white;
  }
`;
