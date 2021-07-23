import styled from 'styled-components';


export const StyledComponent = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px ${(props) => props.theme.color.primary};
  max-width: 300px;
  overflow: hidden;
  transition: bottom 0.25s;

  img {
    min-width: 100%;
    height: 10rem;
    object-fit: cover;
  }

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
    max-height: 4rem;
    overflow: hidden;
  }

  .elipses {
    display: block;
    color: ${(props) => props.theme.color.medium};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  :hover {
    bottom: 1rem;
  }
`;
