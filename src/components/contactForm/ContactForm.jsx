import React from "react";
import ContactCard from "./ContactCard";
import ContactFormCard from "./ContactFormCard";
import Reveal from "../reveal/Reveal";

function ContactForm() {
  const serviceId = import.meta.env.VITE_REACT_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_PUBLIC_KEY;

  return (
    <>
      <Reveal>
        <section className="w-full flex items-center justify-center my-10">
          <div className="w-11/12 sm:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-3">
            <ContactCard />
            <ContactFormCard
              serviceId={serviceId}
              templateId={templateId}
              publicKey={publicKey}
            />
          </div>
        </section>
      </Reveal>
    </>
  );
}

export default ContactForm;
