import React from "react";

export default function functionality(props) {
	return (
		<div className="flex flex-col px-6 border-solid border-2  justify-center rounded-xl lg:w-60 m-4 shadow-sm bg-white  lg:h-52 mx-auto sm:w-52 sm:h-40 func">
			<div className="flex justify-center">
				<img src={props.src} alt="functionality-img" className="w-32 p-4"></img>
			</div>
			<div>
				<h2 className="text-center text-xl py-2 sm:pb-5">{props.title}</h2>
			</div>
		</div>
	);
}
