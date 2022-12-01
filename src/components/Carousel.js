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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/tenzies2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#FF576E", fontWeight: "bolder" }}>
            Tenzies Game
          </h3>
          <p style={{ color: "#ffffff" }}>
            Roll 10 dice at the same time, lock the ones with same numbers, get
            all dice to a single number and win.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/simon.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="images/wallpaper.jpg"
          alt="Forth slide"
        />

        <Carousel.Caption>
          <h3>Forth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
