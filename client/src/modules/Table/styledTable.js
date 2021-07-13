import styled from 'styled-components';


export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;

  thead {
      font-weight: 600;
      color: ${(props) => props.theme.color.secondary};
  }
`;
