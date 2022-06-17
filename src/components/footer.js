import React from "react";
import logo from "../assets/image/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function footer() {
	return (
		<div className="bg-[#00838F] flex justify-between items-center">
			<div className="flex flex-col p-12 pt-6 footer-1">
				<img src={logo} alt="putatoe-log0" className="w-40"></img>
				<h1 className="text-white font-bold text-2xl p-2 pl-0">
					PUTATOE SOLUTIONS PVT. LTD.
				</h1>
				<p className="text-white mb-5 text-lg">
					233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh - 273001
				</p>
			</div>
			<div className="flex flex-col mr-20 ">
				<h3 className="font-bold text-white ">Useful Link</h3>
				<p className="text-white">About Us</p>
				<p className="text-white">Contact Us</p>
				<p className="text-white">Terms &amp; Conditions</p>
				<div className="mt-2 flex justify-between  foot-icon">
					<button
						name="facebook"
						className="bg-white p-2 rounded-[50%] border-2 hover:bg-[#00838F] hover:border-2 hover:text-white foot-icon"
					>
						<FaFacebookF />
					</button>
					<button
						name="facebook"
						className="bg-white p-2 rounded-[50%] border-2 hover:bg-[#00838F] hover:border-2 hover:text-white foot-icon"
					>
						<FaInstagram />
					</button>
					<button
						name="facebook"
						className="bg-white p-2 rounded-[50%] border-2 hover:bg-[#00838F] hover:border-2 hover:text-white foot-icon"
					>
						<FaLinkedinIn />
					</button>
				</div>
			</div>
		</div>
	);
}
