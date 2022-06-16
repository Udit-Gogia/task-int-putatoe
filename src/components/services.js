import React from "react";
import service from "./service";

export default function poprod() {
	return (
		<div className="bg-[#ddefef] pt-4 pb-20">
			<h1 className="text-[#00838F] font-bold text-2xl p-2 text-center py-3">
				Services We Provide
			</h1>

			<div className="flex flex-wrap justify-center ">
				{service.map((item) => (
					<div
						key={item.id}
						className="flex bg-white border-2 rounded-xl shadow-sm w-[32%] items-center m-2 card"
					>
						<div className="p-6 w-1/2 flex flex-col items-center">
							<h2 className="text-center w-44 ml-0 font-bold text-lg ">
								{item.name}
							</h2>
							<ul className="text-center mt-3">
								{item.list.map((ele) => {
									return <li>{ele}</li>;
								})}
							</ul>
						</div>
						<div className="p-4">
							<img
								src={item.src}
								alt={item.name}
								style={{
									width: "15vw",
									margin: " 0 2rem 0 0 ",
								}}
							></img>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
