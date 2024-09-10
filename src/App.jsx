import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from './Components/Footer';

function App() {

  return (
      <div className="bg-[#171d32] h-auto w-full">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
  )
}

export default App;
