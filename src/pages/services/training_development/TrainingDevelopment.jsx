import React from 'react';
import { ServiceDetail,Banner } from '../../../components';
import { traningdevelopment,traingdevelopmentservices } from '../../../assets/images';

const servicesContent ={
    title:"Training & Development",
    image:traingdevelopmentservices,
    description:"Digital transformation isn’t just about technology—it’s about people. Through our Prepspot division, we offer training and development programs designed to upskill your teams in the latest digital tools and best practices. Equip your workforce with the knowledge to innovate, adapt, and excel in a competitive market."
};

const bannerDescription = {
  title:"Training & Development",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:traningdevelopment
};

function TrainingDevelopment() {
  return <>
      <Banner className={'text-cyan-500'} bannerDescription={bannerDescription}/>
      <ServiceDetail servicesContent={servicesContent}/>
  </>
}

export default TrainingDevelopment