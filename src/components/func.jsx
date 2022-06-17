import React from "react";
import Functionality from "./functionality";
import imgs from "./img.js";

function createfunction(img) {
	return <Functionality key={img.id} src={img.src} title={img.title} />;
}

export default function func() {
	return (
		<div className="grid grid-cols-4 w-screen  flex-wrap bg-[#00838f0f] -mt-2  items-center ">
			<div className="w-screen ">
				<div className="items-center m-2 grid xl:grid-cols-4 justify-center  sm:grid-cols-2 lg:grid-cols-3 func-grid">
					{imgs.map(createfunction)}
				</div>
			</div>
		</div>
	);
}
