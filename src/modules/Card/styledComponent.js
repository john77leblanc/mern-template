import styled from 'styled-components';


export const StyledComponent = styled.div`
  position: relative;
  bottom: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px ${(props) => props.theme.color.dark};
  max-width: 300px;
  overflow: hidden;
  transition: bottom 0.25s;

  div {
    padding: 1rem;
  }

  h3 {
    display: inline-block;
    margin: 0 0 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 4px solid ${(props) => props.theme.color.secondary}
  }

  p {
    margin: 0;
  }

  :hover {
    bottom: 1rem;
  }
`;
