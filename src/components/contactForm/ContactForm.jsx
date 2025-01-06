import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

function ContactForm() {
  return (
    <>
      <section className="w-full flex items-center justify-center my-10">
        <div className="w-11/12 sm:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-3">
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
          <div className="w-full lg:w-3/5 h-auto flex items-center justify-center">
            <form
              action=""
              className="w-full h-auto flex flex-col md:grid grid-cols-2  items-center justify-items-center border-y-cyan-400 border-y-2 rounded-sm shadow-xl gap-5  md:gap-7 p-5"
            >
              <div className="w-full">
                <label htmlFor="first_name">First Name</label> <br />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="first_name">Last Name</label> <br />
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="first_name">Email</label> <br />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="first_name">Phone Number</label> <br />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
                />
              </div>
              <div className="w-full h-auto col-span-2">
                <label htmlFor="first_name">Message</label> <br />
                <textarea
                  name=""
                  id=""
                  placeholder="Enter your message"
                  className="w-full min-h-52  resize-none p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className=" bg-orange-500 py-2 px-5 text-lg  capitalize text-white rounded-sm cursor-pointer"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
