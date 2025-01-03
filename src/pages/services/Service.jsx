import React from 'react';
import { Banner,ServicesSection } from '../../components';
import { servicebanner } from '../../assets/images';

const bannerDescription = {
  title:"service",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:servicebanner
};

function Service() {
  return <>
  <Banner bannerDescription={bannerDescription}/>
  <ServicesSection/>
  </>
}

export default Service;