import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

function ContactCard() {
  return (
    <>
      <div className="w-full lg:w-2/5 h-full flex flex-col gap-8 p-5 rounded-sm border-y-2 border-y-cyan-400 shadow-xl">
        <div className="flex items-center gap-3 md:gap-5">
          <MapPin className="h-10 w-10 p-2 rounded-full bg-gray-100 text-cyan-500 font-extralight" />
          <div>
            <h6 className="text-lg text-blue-900 font-semibold font-roboto">
              Address
            </h6>
            <span className="text-sm capitalize font-light">
              No/29 viman nagar pozhichalur chennai-600074
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Phone className="h-10 w-10 p-2 rounded-full bg-gray-100 text-cyan-500 font-extralight" />
          <div>
            <h6 className="text-lg text-blue-900 font-semibold font-roboto">
              Call Us
            </h6>
            <span className="text-sm capitalize font-light">
              +91 9840735709
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Mail className="h-10 w-10 p-2 rounded-full bg-gray-100 text-cyan-500 font-extralight" />
          <div>
            <h6 className="text-lg text-blue-900 font-semibold font-roboto">
              Email US
            </h6>
            <span className="text-sm font-light">
              digitalpebblespvtltd@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.784953928733!2d80.14022767454681!3d12.985601814572169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fd552ef4527%3A0xbdef0efb306cce14!2s10%2F29%2C%20Viman%20Nagar%2C%20Agastheeswarar%20Nagar%2C%20Pozhichalur%2C%20Chennai%2C%20Tamil%20Nadu%20600074!5e0!3m2!1sen!2sin!4v1736143778288!5m2!1sen!2sin"
            className="w-full h-64 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
