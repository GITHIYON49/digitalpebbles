import React from "react";
import { digitalpebbles } from "../../assets/images";
import { Link } from "react-router";
import Reveal from "../reveal/Reveal";

function Footer() {
  return (
    <>
      <Reveal>
        <section className="bg-gray-100 py-10">
          <footer className="w-full flex flex-col items-center justify-center gap-7">
            <div className="w-11/12 flex flex-col md:flex-row items-center justify-between gap-7 mx-auto">
              <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-1">
                <div className="w-48 h-auto flex items-center rounded-sm">
                  <img
                    src={digitalpebbles}
                    alt="digitalpebbles_logo"
                    className="w-full h-full object-cover text-white"
                  />
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col items-center text-center md:text-start md:flex-row md:items-start justify-center md:justify-end gap-7">
                <div>
                  <h5 className="text-base md:text-lg font-semibold uppercase text-cyan-600 text-center md:text-start">
                    Contact Information
                  </h5>
                  <ul className="text-sm md:text-base  text-gray-700 font-semibold flex flex-col items-center md:items-start justify-center gap-2 mt-3">
                    <li>
                      <span>Phone: </span>+91 9840735709
                    </li>
                    <li>
                      <span>Mail: </span>digitalpebblespvtltd@gmail.com
                    </li>
                    <li className="capitalize">
                      <span>Address: </span>No.29, viman nagar, pozhichalur,{" "}
                      <br /> chennai-600074
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-base md:text-lg font-semibold uppercase text-cyan-600 text-center md:text-start">
                    Company
                  </h5>
                  <ul className="text-sm md:text-base text-gray-700 font-semibold flex flex-col items-center md:items-start justify-center gap-1 mt-3">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <span className="inline-block w-4/5 h-[1px] bg-gray-100" />
            <div className="text-center flex flex-col gap-3">
              <h6 className="text-cyan-600 md:text-base font-semibold uppercase">
                back to top
              </h6>
              <span className="text-cyan-600 text-sm  md:text-base capitalize">
                &copy; 2024 Digitalpebbles. All rights reserved
              </span>
              <ul className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm md:text-base text-gray-700 capitalize">
                <li>privacy</li>
                <li>accessibility policy</li>
                <li>cookie policy</li>
                <li>cookies settings</li>
              </ul>
            </div>
          </footer>
        </section>
      </Reveal>
    </>
  );
}

export default Footer;
