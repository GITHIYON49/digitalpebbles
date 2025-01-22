import React, { useState } from "react";
import Reveal from "../reveal/Reveal";
import { motion } from "motion/react";
function WhyUsSection({ className, strings }) {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <Reveal>
        <section className="flex  items-center justify-center my-5 lg:my-10">
          <div
            className={`w-4/5  flex flex-col ${
              className ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-between gap-5`}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: "-2.5deg" }}
              transition={{
                delay: 0.025,
                duration: 0.125,
                ease: "easeInOut",
              }}
              className="w-full lg:w-2/5"
            >
              <motion.img
                src={strings.pic}
                alt="office_team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="w-full lg:w-1/2  flex flex-col items-center sm:items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-start sm:text-start uppercase font-bold  relative after:content-[''] after:w-full  sm:after:w-2/5 hover:after:w-full hover:after:transition-all hover:after:ease-in-out hover:after:duration-300 cursor-default after:h-1 after:bg-cyan-500 after:block after:mt-2">
                {strings.heading}
              </h2>
              <h4 className="text-base sm:text-lg lg:text-xl capitalize text-start sm:text-start font-semibold text-slate-500">
                {strings.title}
              </h4>
              <p
                className={`text-sm lg:text-base  ${
                  isShow ? "line-clamp-none" : "line-clamp-3"
                }  leading-7 text-start sm:text-start `}
              >
                {strings.description}
              </p>
              <motion.button
                onClick={() => handleShow()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ rotate: "2.5deg", scale: 0.95 }}
                transition={{
                  duration: 0.125,
                }}
                className="uppercase text-sm lg:text-base font-semibold bg-cyan-500 text-white px-5 py-2 rounded-3xl hover:bg-cyan-400"
              >
                {isShow ? "read less" : "read more"}
              </motion.button>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

export default WhyUsSection;
