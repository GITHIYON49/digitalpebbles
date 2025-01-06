import React from 'react';
import { ServiceDetail,Banner } from '../../../components';
import { webdevelopment,webservices } from '../../../assets/images';

const servicesContent = {
  title:"Website Development",
  image:webservices,
  description:"Engage your customers with a visually striking, responsive, and results-driven website. Our expert team crafts sites that perfectly blend user experience (UX), robust performance, and scalability. From simple landing pages to complex portals, we build future-ready websites that grow with your business."
};

const bannerDescription = {
  title:"Website Development",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:webdevelopment
};

function WebDevelopment() {
  return <>
  <Banner className={'text-cyan-500'} bannerDescription={bannerDescription}/>
  <ServiceDetail servicesContent={servicesContent} />
  </>
}

export default WebDevelopment;