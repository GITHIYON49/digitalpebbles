import React from "react";

function Banner({ bannerDescription, className }) {
  return (
    <>
      <div
        className={`w-full h-96 relative flex items-center  overflow-hidden`}
      >
        <img
          src={bannerDescription.image}
          alt="digital_image"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative ml-3 sm:ml-0 -translate-x-1/2 left-1/2 lg:left-[15%] lg:-translate-x-0">
          <div className="w-4/5 lg:w-fit flex justify-center flex-col gap-3 bg-white/80 rounded-sm p-5 border-l-8 border-l-cyan-500">
            <h2 className="text-xl sm:text-2xl lg:text-4xl  text-center sm:text-start capitalize font-semibold text-blue-800 font-roboto tracking-widest">
              {bannerDescription.title}
            </h2>
            <p className="w-full lg:w-4/5 text-sm capitalize tracking-wide text-center sm:text-start lg:tracking-widest">
              {bannerDescription.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
