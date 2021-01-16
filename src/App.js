import './App.css';
import { data } from './data';
import Element from './Element';
import { Grid } from './Grid';
import { KeySection } from './KeySection';
import { TopRightCells, TopLeftCell, BottomLeftColumn, BottomLeftSquare } from './EmptyCells';

function App() {
  return (
    <>
      <header>
        <h1>Periodic Table</h1>
      </header>
      <main>
        <Grid>
          <KeySection />
          <TopRightCells />
          <TopLeftCell />
          <BottomLeftColumn />
          <BottomLeftSquare />
          {data.elements.map(el => <Element {...el} />)}
        </Grid>
      </main>
    </>
  );
}

export default App;
