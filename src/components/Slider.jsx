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
    pauseOnHover: false,
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
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  const randomizedSlideImages = slideImages.sort(() => Math.random() - 0.5);

  return (
    <>
      <Slider {...settings} className="absolute top-0 left-0 w-screen full-vh">
        {randomizedSlideImages.map((slideImage, index) => (
          <div key={index} className="slide">
            <Image
              src={slideImage}
              alt="Slide"
              width="1200"
              height="800"
              className="w-screen full-vh object-cover"
              quality={100}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
