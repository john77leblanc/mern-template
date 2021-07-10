import styled from 'styled-components';


export const StyledComponent = styled.div`
  color: white;
  background-color: ${(props) => props.theme.color.primary};
  padding: 1rem 10%;
`;
