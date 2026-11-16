import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

function App() {
  return <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"><Navbar /><main><Introduction /><About /><Skills /><CodingProfiles /><Project /><Experience /><Contact /></main><Footer /></div>;
}
export default App;
