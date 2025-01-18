import React from "react";
import Reveal from "../reveal/Reveal";
function WhyUsSection({ className, strings }) {
  return (
    <>
      <Reveal>
        <section className="flex  items-center justify-center my-5 lg:my-10">
          <div
            className={`w-4/5  flex flex-col ${
              className ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-between gap-5`}
          >
            <div className="w-full lg:w-2/5">
              <img
                src={strings.pic}
                alt="office_team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2  flex flex-col items-center sm:items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-start sm:text-start uppercase font-bold  relative after:content-[''] after:w-full  sm:after:w-2/5 hover:after:w-full hover:after:transition-all hover:after:ease-in-out hover:after:duration-300 cursor-default after:h-1 after:bg-cyan-500 after:block after:mt-2">
                {strings.heading}
              </h2>
              <h4 className="text-base sm:text-lg lg:text-xl capitalize text-start sm:text-start font-semibold text-slate-500">
                {strings.title}
              </h4>
              <p
                className={`text-sm lg:text-base    leading-7 text-start sm:text-start `}
              >
                {strings.description}
              </p>
              <button className="uppercase text-sm lg:text-base font-semibold bg-cyan-500 text-white px-5 py-2 rounded-3xl hover:bg-cyan-400">
                read more
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

export default WhyUsSection;
