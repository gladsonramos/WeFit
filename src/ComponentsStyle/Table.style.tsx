import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableCell = styled.td`
  padding-top: 28px;

  @media only screen and (max-width: 768px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 10px;
  }
`;