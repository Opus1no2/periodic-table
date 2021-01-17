import { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';
import Element from './Element';
import { Grid } from './Grid';
import { KeySection } from './KeySection';
import { TopRightCells, TopLeftCell, BottomLeftColumn, BottomLeftSquare, BottomRow } from './EmptyCells';
import InfoAside from './InfoAside';

const Main = styled.main`
  display: flex;
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
  const [elementProperties, setElementProperties] = useState(null);

  return (
    <>
      <Header>
        <h1>Periodic Table</h1>
      </Header>
      <Main>
        { elementProperties ? <InfoAside {...elementProperties} /> : null }
        <Grid>
          <KeySection />
          <TopRightCells />
          <TopLeftCell />
          {data.elements.map((el, i) => <Element key={i} {...el} onMouseEnter={setElementProperties}/>)}
          <BottomLeftColumn />
          <BottomLeftSquare />
          <BottomRow />
        </Grid>
      </Main>
    </>
  );
}

export default App;
