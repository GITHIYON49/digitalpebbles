import React, { useState, useEffect } from "react";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { CarouselData } from "../../data/CarouselData";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === CarouselData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [CarouselData.length]);

  const handleNextSlide = () => {
    if (current === CarouselData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const handlePrevSlide = () => {
    if (current === 0) {
      setCurrent(CarouselData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <section className="w-full overflow-hidden">
        <div className="relative w-full lg:h-[400px]">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {CarouselData.map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-full relative">
                <img
                  src={slide.image}
                  alt={`Slide ${i}`}
                  className="w-full h-80 md:h-full object-cover"
                />
                <div className="absolute w-3/5 p-3 sm:p-5 py-5 lg:py-10 bg-white/85  border-t-4 rounded-sm border-t-cyan-500 top-1/2 left-1/2 lg:top-1/3 -translate-x-1/2 -translate-y-1/2">
                  <h2
                    className={`text-xl md:text-2xl lg:text-3xl text-blue-900 font-semibold mb-3 text-center`}
                  >
                    {slide.title}
                  </h2>
                  <span className="inline-block w-full text-sm capitalize text-black text-center">
                    {slide.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 inset-0 flex items-center justify-between px-4">
            <button
              className="p-1 sm:p-2 lg:p-3 bg-black/50 rounded-full text-gray-100 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
              onClick={handlePrevSlide}
            >
              <CircleChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
            </button>
            <button
              className="p-1 sm:p-2 lg:p-3 bg-black/50 rounded-full text-gray-100 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
              onClick={handleNextSlide}
            >
              <CircleChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
            </button>
          </div>
          <div className="absolute bottom-0 w-full flex items-center justify-center gap-5 py-5">
            {CarouselData.map((slides, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={i}
                  className={`h-2 w-2 lg:h-3 lg:w-3 ${
                    i === current ? "bg-white" : "bg-gray-500"
                  } rounded-full cursor-pointer`}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
