import styled from 'styled-components';


export const StyledRow = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.medium};
  }

  td {
    padding: 1rem 0;
  }
`;
