import { register } from "swiper/element/bundle";
import React from "react";
import image1 from "../assets/images/1.jpg";
import image5 from "../assets/images/5.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";

register();

function Carousel() {
  return (
    <>
      <div>Carousel</div>
      <div>
        <swiper-container
          slides-per-view="3"
          navigation="true"
          pagination="true"
        >
          <swiper-slide>
            <img src={image1} alt="1" />
          </swiper-slide>
          <swiper-slide>
            <img src={image5} alt="2" />
          </swiper-slide>
          <swiper-slide>
            <img src={image7} alt="3" />
          </swiper-slide>
          <swiper-slide>
            <img src={image8} alt="4" />
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}

export default Carousel;
