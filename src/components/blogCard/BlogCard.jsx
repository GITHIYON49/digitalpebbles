import React from "react";

const BlogCard = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center mt-10 py-20">
        
        <div className="w-4/5 flex flex-col lg:flex-row flex-wrap items-center justify-center h-full">
          <div className="w-full lg:w-1/3 lg:min-h-72 lg:invisible"></div>
          <div className="bg-white w-full h-auto lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
            Holistic<br /> <span>Approach</span>
            </h6>
            <p className="text-sm leading-5 w-4/5 text-gray-500 ">
            We look at your digital ecosystem from every angle strategy, design, development, marketing, and ongoing support ensuring no opportunity is overlooked.
            </p>
          </div>
          <div className="bg-orange-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold  capitalize">
    
            Customized 
              <br /> <span>Solutions</span>
            </h6>
            <p className="text-sm leading-5 w-4/5">
            One size never fits all. Our specialists tailor every project to align with your vision, brand identity, and long-term objectives.
            </p>
          </div>

          <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start shadow-xl justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
            Cutting-Edge<br /> <span>Expertise</span>
            </h6>
            <p className="text-sm leading-5 w-4/5 text-gray-500 ">
            Technology evolves rapidly, and so do we. Our team stays at the forefront of emerging trends, ensuring your solutions are always state-of-the-art.
            </p>
          </div>
          <div className="bg-teal-500 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-white">
            <h6 className="text-xl md:text-2xl font-bold  capitalize">
              Scalable & <br /> <span>Secure</span>
            </h6>
            <p className="text-sm leading-5 w-4/5 ">
            Our solutions are built with scalability and security in mind, so you can confidently grow without missing a beat—or risking your data.
            </p>
          </div>
          <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4">
            <h6 className="text-xl md:text-2xl font-bold text-gray-500 capitalize">
              Training &  <br /> <span>Empowerment</span>
            </h6>
            <p className="text-sm leading-5 w-4/5 text-gray-500 ">
            Through Prepspot, we don’t just deliver a solution; we also equip your team with the skills they need to drive and sustain digital success.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
