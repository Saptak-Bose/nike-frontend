/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <div className="relative mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button
            onClick={clickHandler}
            className="absolute bottom-0 right-[31px] z-10 flex h-[30px] w-[30px] items-center justify-center bg-black hover:opacity-90 md:right-[51px] md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button
            onClick={clickHandler}
            className="absolute bottom-0 right-0 z-10 flex h-[30px] w-[30px] items-center justify-center bg-black hover:opacity-90 md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </button>
        )}
      >
        <div>
          <img
            className="aspect-[16/10] object-cover md:aspect-auto"
            src="/slide-1.png"
            alt="Slide-1"
          />
          <button className="hover:opacty-90 absolute bottom-[25px] left-0 bg-white px-[15px] py-2.5 font-oswald text-[15px] font-medium uppercase text-black/[0.9] md:bottom-[75px] md:px-10 md:py-[25px] md:text-[30px]">
            Shop Now
          </button>
        </div>

        <div>
          <img
            className="aspect-[16/10] object-cover md:aspect-auto"
            src="/slide-2.png"
            alt="Slide-2"
          />
          <button className="hover:opacty-90 absolute bottom-[25px] left-0 bg-white px-[15px] py-2.5 font-oswald text-[15px] font-medium uppercase text-black/[0.9] md:bottom-[75px] md:px-10 md:py-[25px] md:text-[30px]">
            Shop Now
          </button>
        </div>

        <div>
          <img
            className="aspect-[16/10] object-cover md:aspect-auto"
            src="/slide-3.png"
            alt="Slide-3"
          />
          <button className="hover:opacty-90 absolute bottom-[25px] left-0 bg-white px-[15px] py-2.5 font-oswald text-[15px] font-medium uppercase text-black/[0.9] md:bottom-[75px] md:px-10 md:py-[25px] md:text-[30px]">
            Shop Now
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
