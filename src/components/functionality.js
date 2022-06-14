import React from "react";

export default function functionality(props) {
	return (
		<div className="flex flex-col px-6 border-solid border-2  justify-center rounded-xl w-60 m-4 shadow-sm bg-white">
			<div className="flex justify-center">
				<img src={props.src} alt="functionality-img" className="w-32 p-4"></img>
			</div>
			<div>
				<h2 className="text-center text-xl py-2">{props.title}</h2>
			</div>
		</div>
	);
}
