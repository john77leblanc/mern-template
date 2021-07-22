import styled from 'styled-components';


export const StyledComponent = styled.div`
  @keyframes load {
    from { left: 0; }
    to { left: 5rem; }
  }

  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.color.light};
  animation: load 0.5s ease-in-out infinite alternate;
`;
