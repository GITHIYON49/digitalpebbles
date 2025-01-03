import React from 'react';
import { Banner,WhyUsSection } from '../../components';
import { aboutbanner } from '../../assets/images';

const bannerDescription = {
  title:"about us",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:aboutbanner
};

function About() {
  return <>
      <Banner bannerDescription={bannerDescription}/>
      <WhyUsSection/>
  </>
}

export default About;