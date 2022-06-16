import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "./items";
import Slider from "react-slick";

export default function poprod() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
	};
	return (
		<div className="bg-[#ddefef]">
			<h1 className="text-[#00838F] font-bold text-xl p-2 text-center py-3">
				Popular Products
			</h1>

			{/* <div className="bg-[#00838F] flex w-screen">
				<Slider {...settings} style={{ display: "flex" }}>
					<div className="flex flex-row gap-2 w-full">
						{items.map((item) => {
							return (
								<div
									key={item.id}
									// className="flex bg-white rounded-xl m-2 w-1/2 flex-col  items-center"
								>
									<img src={item.src} className="p-2 " alt={item.title}></img>
									<p className="p-2 text-xl text-center">{item.title}</p>
								</div>
							);
						})}
					</div>
				</Slider>
			</div> */}

			<div className="bg-[#00838F]">
				<Slider {...settings} className="w-screen">
					{items.map((item) => (
						<div className="car-product">
							<img
								src={item.src}
								alt={item.alt}
								style={{ width: "10vw" }}
								className="car-product-img"
							/>
							<p className="p-2 text-2xl text-center mb-4">{item.title}</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
