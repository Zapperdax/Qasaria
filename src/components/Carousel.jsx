import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      autoPlay={false}
      interval={5000}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/rps.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/tenzies4.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/simon.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      {/* Carosel starts here */}
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/qasaria3.png"
          alt="Forth slide"
        />
      </Carousel.Item>

      {/* Carousel Ends Here */}
    </Carousel>
  );
}
