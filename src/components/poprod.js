import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "./items";
import Slider from "react-slick";

export default function poprod() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 4000,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 5,
	};
	return (
		<div className="bg-[#ddefef]">
			<h1 className="text-[#00838F] font-bold text-xl p-2 text-center py-3">
				Popular Products
			</h1>

			<div className="bg-[#00838F]">
				<Slider {...settings} className="w-screen">
					{items.map((item) => (
						<div className="car-product">
							<img src={item.src} alt={item.alt} className="car-product-img" />
							<p className="p-2 text-2xl text-center mb-4">{item.title}</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
