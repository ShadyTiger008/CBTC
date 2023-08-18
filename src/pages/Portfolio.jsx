import { AnimatePresence } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "../components/Navabr";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import About from "../components/About";
import Home from "../components/Home";

function App() {

  return (
    <AnimatePresence initial={false}>
      <main className="flex flex-col items-center justify-center min-h-screen bg-primary pb-20">
        <Navbar/>
        {/* Home Section  */}
        <Home/>
        {/* Main Section  */}
        <main className="w-[80%] mt-5">
          {/* About Section */}
          <About/>
          {/* TimeLine */}
          <Qualification/>
          {/* Project Section */}
          <Projects/>

          {/* Contact Section */}
          <Contact/>
          {/* Footer Section  */}
          <Footer/>
        </main>
      </main>
    </AnimatePresence>
  );
}

export default App;
