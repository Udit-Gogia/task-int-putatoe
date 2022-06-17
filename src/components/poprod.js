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
		responsive: [
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 5,
				},
			},
		],
	};
	return (
		<div className="bg-[#ddefef]">
			<h1 className="text-[#00838F] font-bold text-xl p-2 text-center py-3">
				Popular Products
			</h1>

			<div className="bg-[#00838F]">
				<Slider {...settings} className="w-screen">
					{items.map((item) => (
						<div
							key={item.id}
							className="car-product sm:h-56 sm:w-46 sm:p-4 xl:h-[18vw] xl:w-[18vw] sm:m-2 "
						>
							<img
								src={item.src}
								alt={item.title}
								className="car-product-img"
							/>
							<p className="p-2 text-2xl text-center mb-4 sm:text-lg car-product-title">
								{item.title}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
