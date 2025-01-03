import React from 'react';
import { ServiceDetail } from '../../../components';

const servicesContent ={
    title:"Training & Development",
    image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1735645133~exp=1735648733~hmac=68fe978d39ee0258ed155e1da7ef67c2165c29097d01d075fecebbb116d7aab1&w=826",
    description:"Digital transformation isn’t just about technology—it’s about people. Through our Prepspot division, we offer training and development programs designed to upskill your teams in the latest digital tools and best practices. Equip your workforce with the knowledge to innovate, adapt, and excel in a competitive market."
};

function TrainingDevelopment() {
  return <>
      <ServiceDetail servicesContent={servicesContent}/>
  </>
}

export default TrainingDevelopment