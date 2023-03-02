import { Cart } from "./components/Cart";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Sales } from "./components/Sales";
import { Stories } from "./components/Stories";
import { Footer } from "./components/utils/Footer";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';

function App() {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Header heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Feature endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <Feature endpoint={sneaker} />
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </div>
  );
}

export default App;
