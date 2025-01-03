import React from 'react';
import { ServiceDetail } from '../../../components';

const servicesContent =  {
    title:"App Development",
    image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1735645133~exp=1735648733~hmac=68fe978d39ee0258ed155e1da7ef67c2165c29097d01d075fecebbb116d7aab1&w=826",
    description:"Ready to put your brand at users’ fingertips? Our app development specialists design intuitive, high-performing mobile applications across iOS and Android. Expect smooth navigation, modern design, and features that delight your customers—keeping them coming back time and again."
};

function AppDevelopment() {
  return <>
  <ServiceDetail servicesContent={servicesContent}/>
  </>
}

export default AppDevelopment;