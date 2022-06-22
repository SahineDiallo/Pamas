import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselDiv = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={5000}
    >
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="img"
        />
      </div>
    </Carousel>
  );
};

export default CarouselDiv;
