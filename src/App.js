import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Func from "./components/func";
import Poprod from "./components/poprod";
import Services from "./components/services";

function App() {
	return (
		<div className="App overflow-x-hidden">
			<Navbar />
			<Carousel />
			<Func />
			<Poprod />
			<Services />
		</div>
	);
}

export default App;
