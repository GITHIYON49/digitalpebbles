import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";
import { digitalpebbles } from "../../assets/images";

function Navbar() {
  return (
    <>
      <header className="w-full h-auto bg-slate-200">
        <nav className="flex items-center justify-between lg:justify-around py-3 px-5 relative">
          <div className="w-60 h-32 cursor-pointer">
            <Link to='/'>
            <img
              src={digitalpebbles}
              alt="digital_pebbles_logo"
              className="w-full h-full object-cover"
            />
            </Link>
            
          </div>
          <ul className="hidden lg:flex items-center gap-10 font-semibold">
            <li> <Link to='/'>Home</Link></li>
            <li><Link to='/about'>About </Link></li>
            <li className=" relative group cursor-pointer">
              <Link to='/services' className="flex gap-2 items-center">Services  <ChevronDown />
              <span className="h-10 w-full absolute top-0 hidden group-hover:block opacity-0" />
              <div className="absolute top-10 opacity-0 translate-y-[-10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all ease-linear duration-300 z-10">
                <ul className="bg-white w-60 flex flex-col text-left rounded-md shadow-md">
                  <li>
                     <Link to='/services/webdevelopment'  className="inline-block w-full py-3 px-2 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer "> Website Development </Link> 

                  </li>
                  <li>
                  <Link to='/services/appdevelopment'  className="inline-block w-full py-3 px-2 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer "> App Development </Link> 

                  </li>
                  <li>
          
                      <Link to='/services/e_commerce'  className="inline-block w-full py-3 px-2 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer "> E-Commerce Platforms </Link> 

                  </li>
                  <li>
                    
                      <Link to='/services/gagets_amazon_marketing'  className="inline-block w-full py-3 px-2 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer "> Gadgets & Amazon Marketplace </Link> 

                  </li>
                  <li>
                      <Link to='/services/trainingdevelopment'  className="inline-block w-full py-3 px-2 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer "> Training & Development </Link> 
                  </li>
                </ul>
              </div>
              </Link>
            </li>

            <li> <Link to='/contact'>Contact</Link></li>
          </ul>
          <div className="flex items-center gap-3">
            <div>
              <button className="outline-none px-5 py-2 capitalize hover:text-gray-700 cursor-pointer font-semibold">
                login
              </button>
              <button className="outline-none px-7 py-2 bg-sky-500 rounded-3xl text-white capitalize cursor-pointer hover:bg-sky-400 transition-all">
                register
              </button>
            </div>
            <div className="lg:hidden">
              <button>
                <Menu />
              </button>
            </div>
          </div>
          {/* <ul className="absolute top-40 flex flex-col  bg-gray-100 left-0 right-0 rounded-lg">
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 bg-cyan-500 text-white  hover:text-white transition-all ease-in-out cursor-pointer duration-300">Home</li>
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">About</li>
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Services</li>
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Contact</li>
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Login</li>
            <li className="py-3 px-5 rounded-lg capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Register</li>
          </ul> */}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
