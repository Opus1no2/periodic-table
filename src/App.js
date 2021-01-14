import './App.css';
import { data } from './data';
import Element from './Element';

function App() {
  return (
    <>
      <header>
        <h1>Periodic Table</h1>
      </header>
      <main>
        {data.map(el => <Element {...el} />)}
      </main>
    </>
  );
}

export default App;
