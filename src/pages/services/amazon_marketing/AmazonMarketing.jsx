import React from 'react';
import { ServiceDetail } from '../../../components';

const servicesContent =  {
    title:"Gadgets & Amazon Marketplace",
    image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1735645133~exp=1735648733~hmac=68fe978d39ee0258ed155e1da7ef67c2165c29097d01d075fecebbb116d7aab1&w=826",
    description:"Tap into the world’s largest online marketplace with confidence. We handle every step, from listing and storefront optimization to inventory management, so your products (including gadgets and accessories) gain maximum visibility. Our proven tactics help you stand out and drive sustainable sales growth on Amazon."
};

function AmazonMarketing() {
  return <>
     <ServiceDetail servicesContent={servicesContent}/>
  </>
}

export default AmazonMarketing;