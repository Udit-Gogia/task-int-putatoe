import React from "react";
import service from "./service";

export default function poprod() {
	return (
		<div className="bg-[#ddefef] pt-4 pb-20">
			<h1 className="text-[#00838F] font-bold text-2xl p-2 text-center py-3">
				Services We Provide
			</h1>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center sm:grid-cols-1 sm:grid-flow-row">
				{service.map((item) => (
					<div
						key={item.id}
						className="flex sm:flex-col bg-white border-2 rounded-xl xl:flex-row shadow-sm  items-center m-2 card  sm:grid-cols-2 sm:justify-center"
					>
						<div className="p-6  flex flex-col items-center">
							<h2 className="text-center  ml-0 font-bold lg:text-lg md:text-md">
								{item.name}
							</h2>
							<ol className="pl-4 mt-3 list-disc ">
								{item.list.map((ele) => {
									return <li>{ele}</li>;
								})}
							</ol>
						</div>
						<div className="p-4 ">
							<img
								src={item.src}
								alt={item.name}
								className="lg:w-[15rem] md:w-[13rem] "
							></img>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
