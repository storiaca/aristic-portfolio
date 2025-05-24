import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-800">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
