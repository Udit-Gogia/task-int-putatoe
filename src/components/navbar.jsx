import icon_location from "../assets/image/icon-location.png";
import { FaSearch, FaBell, FaCartPlus, FaMicrophone } from "react-icons/fa";

export default function navbar() {
	return (
		<div className="bg-[rgb(0,131,143)] p-3 flex items-center justify-center w-screen relative navbar xl:flex-row">
			<div className="flex seg-1">
				<h1 className="font-bold text-white text-2xl xl:absolute left-20 tracking-wide sm-absolute sm:top-2 xl:top-0 heading">
					PUTATOE
				</h1>
				<img
					src={icon_location}
					alt="icon-location"
					className="w-8 h-8 xl:mr-8 sm:mx-2 loc-icon"
				></img>
				<div className="flex bg-white items-center rounded-md sm:mr-4">
					<input
						type="text"
						placeholder="Search for Products and Brands"
						className="rounded-md py-2 pl-4 min-w-[25vw] outline-none pr-8"
					></input>
					<button name="Search">
						<FaSearch className="text-[#00838F] mr-2 text-xl" />
					</button>
					<button name="Microphone">
						<FaMicrophone className="text-[#00838F] font-bold mr-3 text-xl" />
					</button>
				</div>
			</div>
			<div className="flex  sm:mt-4 xl:mt-0 seg-2">
				<div className="flex jusitfy-evenly px-4">
					<button className="ml-4" name="Bell">
						<FaBell className="text-white font-bold text-xl " />
					</button>
					<button className="ml-4" name="Cart">
						<FaCartPlus className="text-white font-bold text-xl " />
					</button>
				</div>
				<button>
					<p className="bg-white p-2 text-[#00838F] font-bold rounded-lg xl:absolute right-20 top-3">
						LOGIN
					</p>
				</button>
			</div>
		</div>
	);
}
