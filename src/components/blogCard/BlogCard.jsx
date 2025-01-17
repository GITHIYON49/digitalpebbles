import React from "react";
import Reveal from "../reveal/Reveal";

const BlogCard = () => {
  return (
    <>
      <Reveal>
        <section className="w-full flex items-center justify-center my-5 lg:mt-10">
          <div className="w-4/5 flex flex-col lg:flex-row flex-wrap items-center justify-center h-full">
            <div className="w-full lg:w-1/3 lg:min-h-72 lg:invisible"></div>
            <div className="bg-white w-full h-auto lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold text-gray-500 capitalize">
                Holistic <span className="lg:block">Approach</span>
              </h6>
              <p className="w-full text-center text-sm md:text-base lg:text-start leading-5 lg:w-11/12 text-gray-500 ">
                We look at your digital ecosystem from every angle strategy,
                design, development, marketing, and ongoing support ensuring no
                opportunity is overlooked.
              </p>
            </div>
            <div className="bg-orange-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold  capitalize">
                Customized
                <span className="lg:block">Solutions</span>
              </h6>
              <p className="w-full text-center text-sm md:text-base lg:text-start leading-5 lg:w-11/12">
                One size never fits all. Our specialists tailor every project to
                align with your vision, brand identity, and long-term
                objectives.
              </p>
            </div>

            <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start shadow-xl justify-end p-5 gap-4 text-white">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold text-gray-500 capitalize">
                Cutting-Edge <span className="lg:block">Expertise</span>
              </h6>
              <p className="w-full text-center text-sm md:text-base lg:text-start leading-5 lg:w-11/12 text-gray-500 ">
                Technology evolves rapidly, and so do we. Our team stays at the
                forefront of emerging trends, ensuring your solutions are always
                state-of-the-art.
              </p>
            </div>
            <div className="bg-teal-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold  capitalize">
                Scalable & <span className="lg:block">Secure</span>
              </h6>
              <p className="w-full text-center text-sm md:text-base lg:text-start leading-5 lg:w-11/12 ">
                Our solutions are built with scalability and security in mind,
                so you can confidently grow without missing a beat—or risking
                your data.
              </p>
            </div>
            <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold text-gray-500 capitalize">
                Training & <span className="lg:block">Empowerment</span>
              </h6>
              <p className="w-full text-center text-sm md:text-base lg:text-start leading-5 lg:w-11/12 text-gray-500 ">
                Through Prepspot, we don’t just deliver a solution; we also
                equip your team with the skills they need to drive and sustain
                digital success.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
};

export default BlogCard;
