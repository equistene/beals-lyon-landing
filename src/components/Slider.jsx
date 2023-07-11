import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function SliderMain() {
  const settings = {
    fade: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings} className="absolute top-0 left-0 w-screen h-screen">
        <div className="slide">
          <Image
            src="/images/01.jpg"
            alt="Slide"
            width="1200"
            height="800"
            className="w-screen h-screen object-cover"
          />
        </div>

        <div className="slide">
          <Image
            src="/images/02.jpg"
            alt="Slide"
            width="1200"
            height="800"
            className="w-screen h-screen object-cover"
          />
        </div>

        <div className="slide">
          <Image
            src="/images/03.jpg"
            alt="Slide"
            width="1200"
            height="800"
            className="w-screen h-screen object-cover"
          />
        </div>
      </Slider>
    </>
  );
}
