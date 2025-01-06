import React from 'react';
import { Banner ,ContactForm} from '../../components';
import { contactbanner } from '../../assets/images';

const bannerDescription = {
  title:"contact",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga possimus vero placeat repellat nesciunt.",
  image:contactbanner
};

function Contact() {
  return <>
  <Banner bannerDescription={bannerDescription}/>
  <ContactForm/>
  </>
}

export default Contact;