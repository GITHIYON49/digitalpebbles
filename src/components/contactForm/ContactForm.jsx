import React from "react";
import ContactCard from "../contactCard/ContactCard";
import ContactFormCard from "../contactFormCard/ContactFormCard";


function ContactForm() {
  const serviceId = import.meta.env.VITE_REACT_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_PUBLIC_KEY

  return (
    <>
      <section className="w-full flex items-center justify-center my-10">
        <div className="w-11/12 sm:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-3">
         <ContactCard/>
         <ContactFormCard serviceId={serviceId} templateId={templateId} publicKey={publicKey}/>  
        </div>
      </section>
    </>
  );
}

export default ContactForm;
