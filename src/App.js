import styled from 'styled-components';
import { data } from './data';
import Element from './Element';
import { Grid } from './Grid';
import { KeySection } from './KeySection';
import { TopRightCells, TopLeftCell, BottomLeftColumn, BottomLeftSquare, BottomRow } from './EmptyCells';


const Main = styled.div`
  padding: 0 25px 0 25px;
`;

const Header = styled.header`
  padding: 0 25px 0 25px;
  border-top: solid 10px #4b7aff;
  min-height: 60px;
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <>
      <Header>
        <h1>Periodic Table</h1>
      </Header>
      <Main>
        <Grid>
          <KeySection />
          <TopRightCells />
          <TopLeftCell />
          {data.elements.map(el => <Element {...el} />)}
          <BottomLeftColumn />
          <BottomLeftSquare />
          <BottomRow />
        </Grid>
      </Main>
    </>
  );
}

export default App;
