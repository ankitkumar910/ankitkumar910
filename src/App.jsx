import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Intro />
        <About />
        <Skills />
        {/* <Project /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
