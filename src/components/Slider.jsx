import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function SliderMain() {
  const settings = {
    fade: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideImages = [
    "/images/01.jpg",
    "/images/02.jpg",
    "/images/03.jpg",
    "/images/04.jpg",
    "/images/05.jpg",
    "/images/06.jpg",
    "/images/07.jpg",
    "/images/08.jpg",
    "/images/09.jpg",
    "/images/10.jpg",
  ];

  const randomizedSlideImages = slideImages.sort(() => Math.random() - 0.5);

  return (
    <>
      <Slider {...settings} className="absolute top-0 left-0 w-screen h-screen">
        {randomizedSlideImages.map((slideImage, index) => (
          <div key={index} className="slide">
            <Image
              src={slideImage}
              alt="Slide"
              width="1200"
              height="800"
              className="w-screen h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
}