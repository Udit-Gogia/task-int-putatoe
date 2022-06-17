import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/image/carouselimg1.webp";
import img2 from "../assets/image/carouselimg2.webp";
import img3 from "../assets/image/carouselimg3.webp";
import img4 from "../assets/image/carouselimg4.webp";

export default function carousel() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<div className="sm:h-[10rem] xl:h-full car-div">
			<Slider {...settings} className="car">
				<div className="sm:h-[10rem] xl:h-full">
					<img
						src={img1}
						className="w-screen sm:h-[10rem] xl:h-full car-img"
						alt="img1"
					/>
				</div>
				<div className="sm:h-32 xl:h-full">
					<img
						src={img2}
						className="w-screen sm:h-32  xl:h-full car-img"
						alt="img2"
					/>
				</div>
				<div className="sm:h-32 xl:h-full">
					<img
						src={img3}
						className="w-screen sm:h-32  xl:h-full car-img"
						alt="img3"
					/>
				</div>
				<div className="sm:h-32 xl:h-full">
					<img
						src={img4}
						className="w-screen sm:h-32  xl:h-full car-img"
						alt="img4"
					/>
				</div>
			</Slider>
		</div>
	);
}
