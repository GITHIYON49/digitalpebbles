import React from 'react';
import { ServiceDetail } from '../../../components';


const servicesContent =  {
    title:"E-Commerce Platforms",
    image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1735645133~exp=1735648733~hmac=68fe978d39ee0258ed155e1da7ef67c2165c29097d01d075fecebbb116d7aab1&w=826",
    description:"Stay one step ahead of the competition by offering a seamless online buying experience. We help businesses set up and optimize e-commerce platforms that are tailored to your unique branding, product mix, and growth strategies—driving conversions and ensuring satisfied shoppers."
};

function Ecommerce() {
  return <>
  <ServiceDetail servicesContent={servicesContent}/>
  </>
}

export default Ecommerce;