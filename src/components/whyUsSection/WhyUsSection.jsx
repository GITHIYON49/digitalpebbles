import React from 'react';
import { whyus } from '../../assets/images';

function WhyUsSection() {
    return <>
    <section className='flex  items-center justify-center my-10'>
      <div className='w-4/5  flex flex-col lg:flex-row-reverse items-center justify-between gap-5'>
      <div className='w-full lg:w-2/5'>
          <img src={whyus} alt="office_team" className='w-full h-full object-cover' />
      </div>
      <div className='w-full lg:w-1/2  flex flex-col items-start justify-between gap-5'>
          <h2 className='text-2xl lg:text-3xl uppercase font-bold font-inter'>Why Choose Digital Pebbles?</h2>
          <h4 className='text-xl lg:text-2xl capitalize font-semibold text-slate-500'>Let’s Transform Your Future</h4>
          <p className='text-sm lg:text-base leading-7'>Digital Pebbles is more than a service provider—we’re your long-term strategic ally in digital transformation. From initial consultation and planning to final launch and continual optimization, our team is by your side every step of the way.</p>
          <button className='uppercase text-sm lg:text-base font-semibold bg-cyan-600 text-white px-5 py-2 rounded-sm hover:bg-cyan-500'>read more</button>
      </div>
      </div>
    </section>
    </>
}

export default WhyUsSection;