import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/image/carouselimg1.png";
import img2 from "../assets/image/carouselimg2.png";
import img3 from "../assets/image/carouselimg3.png";
import img4 from "../assets/image/carouselimg4.png";

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
		<div>
			<Slider {...settings}>
				<div>
					<img src={img1} className="w-screen" alt="img1" />
				</div>
				<div>
					<img src={img2} className="w-screen" alt="img2" />
				</div>
				<div>
					<img src={img3} className="w-screen" alt="img3" />
				</div>
				<div>
					<img src={img4} className="w-screen" alt="img4" />
				</div>
			</Slider>
		</div>
	);
}
