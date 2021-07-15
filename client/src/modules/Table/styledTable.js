import styled from 'styled-components';


export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;

  thead {
    color: ${(props) => props.theme.color.secondary};
    font-weight: 600;
  }

  tbody tr:first-child {
    color: ${(props) => props.theme.color.primary};
    font-weight: 600;
  }
`;
