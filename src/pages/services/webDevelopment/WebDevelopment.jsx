import React from 'react';
import { ServiceDetail,Banner } from '../../../components';

const servicesContent = {
  title:"Website Development",
  image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1735645133~exp=1735648733~hmac=68fe978d39ee0258ed155e1da7ef67c2165c29097d01d075fecebbb116d7aab1&w=826",
  description:"Engage your customers with a visually striking, responsive, and results-driven website. Our expert team crafts sites that perfectly blend user experience (UX), robust performance, and scalability. From simple landing pages to complex portals, we build future-ready websites that grow with your business."
};

const bannerDescription = {
  title:"Website Development",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:"https://www.shutterstock.com/shutterstock/photos/2436547453/display_1500/stock-photo-portrait-of-black-creative-director-giving-instructions-on-d-game-visuals-to-male-developer-in-2436547453.jpg"
};

function WebDevelopment() {
  return <>
  <Banner className={'text-cyan-500'} bannerDescription={bannerDescription}/>
  <ServiceDetail servicesContent={servicesContent} />
  </>
}

export default WebDevelopment;