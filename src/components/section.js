import React from "react";
import home from "../assets/image/home.png";
import chat from "../assets/image/chat.png";
import orders from "../assets/image/orders.png";
import account from "../assets/image/account.png";

export default function section() {
	return (
		<div className="fixed top-[93vh] bg-[#ddefef] w-screen -my-1 pb-5 pt-2 z-10 flex justify-evenly items-center">
			<button>
				<img src={account} alt="account-icon " className="sm:w-6 lg:w-8"></img>
			</button>
			<button>
				<img src={home} alt="home-icon" className="sm:w-6 lg:w-8"></img>
			</button>
			<button>
				<img src={orders} alt="orders-icon" className="sm:w-6 lg:w-8"></img>
			</button>
			<button>
				<img src={chat} alt="chat-icon" className="sm:w-6 lg:w-8"></img>
			</button>
		</div>
	);
}
