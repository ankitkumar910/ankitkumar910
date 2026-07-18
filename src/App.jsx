import Navbar from "./components/Navbar";

import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Bottombar from "./components/Bottombar";
import Introduction from "./components/Introduction";

function App() {
	return (
		<div className="min-h-screen transition-colors duration-300">
			<Navbar />

			<Bottombar />

			<main>
			   <Introduction />
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
