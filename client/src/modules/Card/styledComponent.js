import styled from 'styled-components';


export const StyledComponent = styled.div`
  position: relative;
  bottom: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px ${(props) => props.theme.color.primary};
  max-width: 300px;
  overflow: hidden;
  transition: bottom 0.25s;

  @keyframes fadein {
    from {
      opacity: 0;
      bottom: -2rem;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }

  animation: fadein 1s ;

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
    max-height: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :hover {
    bottom: 1rem;
  }
`;
