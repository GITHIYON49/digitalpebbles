import React from "react";
import { Banner, ContactForm } from "../../components";
import { contactbanner } from "../../assets/images";

const bannerDescription = {
  title: "contact",
  description:
    "Contact Our Expert Team Today for Tailored IT Solutions and Support.",
  image: contactbanner,
};

function Contact() {
  return (
    <>
      <Banner bannerDescription={bannerDescription} />
      <div className="my-5 px-3">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold ">
          Contact us
        </h3>
        <p className="text-center mt-2 text-sm md:text-base lg:text-lg">
          Reach out and we'll get in touch within 24 hours.
        </p>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
