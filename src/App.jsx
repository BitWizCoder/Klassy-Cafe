import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="font-poppins">
      <Nav />
      <Hero />
      <About />
      <Menu />
    </div>
  );
}

export default App;
