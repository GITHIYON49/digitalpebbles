import React from 'react';
import { WhyUsSection,BlogCard,Carousel } from '../../components';
import { aboutus,whyus } from '../../assets/images';
const strings = [{
  heading:"Why Choose Digital Pebbles?",
  title:"Let’s Transform Your Future",
  pic:whyus,
  description:"Digital Pebbles is more than a service provider—we’re your long-term strategic ally in digital transformation. From initial consultation and planning to final launch and continual optimization, our team is by your side every step of the way."
},
{
  heading:"About us",
  title:"Future is On",
  pic:aboutus,
  description:"At Digital Pebbles, we  specialize in turning ideas into innovative, high-performing digital solutions. Whether you need a modern website, a custom mobile application, a seamless e-commerce platform, or end-to-end support in the Amazon marketplace, we’ve got you covered. Our mission is simple: empower businesses to thrive in an ever-evolving digital landscape through smart, efficient, and user-focused technology."
}]

function Home() {
  return <>
  <Carousel/>
  <div className='w-full bg-cyan-200 py-2 px-1 text-xs lg:text-base font-semibold text-center text-gray-700  uppercase'>Digital Pebbles – Turning business visions into digital realities.</div>
  <div className='flex flex-col gap-5 sm:gap-10'>
  <WhyUsSection strings={strings[1]} className="flex-row-reverse line-clamp-2"/>
  <WhyUsSection strings={strings[0]}/>
  </div>
 
  <BlogCard/>
  </>
}

export default Home