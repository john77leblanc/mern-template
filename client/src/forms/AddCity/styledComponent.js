import styled from 'styled-components';


export const StyledComponent = styled.form`
  button {
    position: relative;
    padding: 0;
    border: 4px solid ${(props) => props.theme.color.light};
    border-radius: 3px;
    transition: border-color 0.25s;

    :after {
      content: "Remove";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: white;
      background-color: ${(props) => props.theme.overlay};
      text-align: center;
      line-height: 5rem;
      opacity: 0;
      transition: opacity 0.25s;
    }

    :hover {
      border-color: ${(props) => props.theme.color.medium};

      :after {
        opacity: 1;
      }
    }
  }

  img {
    width: 10rem;
    height: 5rem;
    object-fit: cover;
  }
`;
