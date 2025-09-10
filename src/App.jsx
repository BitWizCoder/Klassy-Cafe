import About from "./components/About";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Special from "./components/Special";

function App() {
  return (
    <div className="font-poppins">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Chefs />
      <Contact />
      <Special />
    </div>
  );
}

export default App;
