import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Func from "./components/func";
import Poprod from "./components/poprod";
import Services from "./components/services";
import Section from "./components/section";
import Footer from "./components/footer";

function App() {
	return (
		<div className="App overflow-x-hidden">
			<Navbar />
			<Carousel />
			<Func />
			<Section />
			<Poprod />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
