import React from "react";
import { useNavigate } from "react-router";
import { servicesData } from "../../data/ServicesData";

function ServicesSection() {
  const navigation = useNavigate();
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-10 my-10 ">
        <h3 className="text-3xl text-slate-500 font-semibold uppercase text-center">
          our Services
        </h3>
        <div className="md:w-4/5  flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {servicesData.map((data, i) => {
            return (
              <div
                key={i}
                className="w-4/5 sm:w-2/5 lg:w-1/3 xl:w-3/12 min-h-80 hover:scale-110 transition-all flex flex-col justify-between duration-200 rounded-sm shadow-xl shadow-gray-300 overflow-hidden  relative cursor-pointer"
              >
                <div className="h-40 w-full">
                  <img
                    src={data.image}
                    alt="nature"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between gap-3">
                  <h6 className="text-base uppercase font-roboto text-cyan-700 font-semibold">
                    {data.title}
                  </h6>
                  <p className="text-sm text-slate-500 line-clamp-3">
                    {data.description}
                  </p>
                </div>
                <div className="p-3">
                <button
                    className="outline-none text-sm bg-cyan-500 capitalize rounded-sm text-white w-fit px-5 py-2"
                    onClick={() => navigation(data.navigate)}
                  >
                    Read more
                  </button>

                </div>
                
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
