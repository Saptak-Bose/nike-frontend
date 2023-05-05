/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

const ProductDetailsCarousel = (props: Props) => {
  return (
    <div className="sticky top-[50px] mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="ProductCarouselImage 1" />
        <img src="/p2.png" alt="ProductCarouselImage 2" />
        <img src="/p3.png" alt="ProductCarouselImage 3" />
        <img src="/p4.png" alt="ProductCarouselImage 4" />
        <img src="/p5.png" alt="ProductCarouselImage 5" />
        <img src="/p6.png" alt="ProductCarouselImage 6" />
        <img src="/p7.png" alt="ProductCarouselImage 7" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
