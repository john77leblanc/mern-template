import styled from 'styled-components';


export const StyledComponent = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.color.primary};
  color: white;
`;
