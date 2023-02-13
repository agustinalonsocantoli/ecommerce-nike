import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Sales } from "./components/Sales";
import { Stories } from "./components/Stories";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story } from './data/data.js';

function App() {
  return (
    <div>
      <main className="flex flex-col gap-16 relative">
        <Header heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Feature endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <Feature endpoint={sneaker} />
        <Stories story={story}/>
      </main>
    </div>
  );
}

export default App;
