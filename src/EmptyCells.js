import styled from 'styled-components';

export const TopLeftCell = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

export const TopRightCells = styled.div`
  grid-column: 13 / span 5;
  grid-row: 1 / span 1;
`;

export const BottomLeftColumn = styled.div`
  grid-column: 3 / span 1;
  grid-row: 6 / span 5;
`;

export const BottomLeftSquare = styled.div`
  grid-column: 1 / span 2;
  grid-row: 8 / span 3;
`;

export const BottomRow = styled.div`
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: span 15;
  height: 25px;
`;