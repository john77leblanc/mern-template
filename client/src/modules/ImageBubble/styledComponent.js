import styled from 'styled-components';


const size = '20rem';

export const StyledComponent = styled.img`
  object-fit: cover;
  width: ${size};
  height: ${size};
  margin: 2rem;
  clip-path: circle(50.0% at 50% 50%);
  transition: clip-path 0.5s;

  :hover {
    clip-path: circle(72.0% at 50% 50%);
  }
`;
