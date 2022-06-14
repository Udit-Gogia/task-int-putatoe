import React from "react";
import Functionality from "./functionality";
import imgs from "./img.js";

function createfunction(img) {
	return <Functionality key={img.id} src={img.src} title={img.title} />;
}

export default function func() {
	return (
		<div className="flex w-screen  flex-wrap bg-[#00838f0f] -mt-2 flex-col items-center ">
			<div className="flex">{imgs.slice(0, 4).map(createfunction)}</div>
			<div className="flex">{imgs.slice(4).map(createfunction)}</div>
		</div>
	);
}
