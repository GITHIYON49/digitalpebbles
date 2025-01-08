import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";
import { digitalpebbles} from "../../assets/images";

function Navbar() {

  const [isShowMenu,setIsShowMenu] = useState(false);

  function handleClick(){
    setIsShowMenu(!isShowMenu);
  }
  return (
    <>
      <header className="w-full h-auto  bg-white z-50 shadow-lg sticky top-0">
        <nav className="w-full flex items-center justify-between lg:justify-around py-3 px-5 relative">
          <div className="w-48 h-auto cursor-pointer">
            <Link to='/'>
            <img
              src={digitalpebbles}
              alt="digital_pebbles_logo"
              className="w-full h-full object-cover"
            />
            </Link>
            
          </div>
          <ul className="hidden lg:flex items-center text-lg gap-10 font-semibold">
            <li className="px-5 py-3 rounded-sm text-white hover:text-white bg-cyan-500 cursor-pointer"> <Link to='/'>Home</Link></li>
            <li className="px-5 py-3 rounded-sm  hover:text-white hover:bg-cyan-500 duration-200 transition-all cursor-pointer ease-in-out"><Link to='/about'>About </Link></li>
            <li className=" relative group cursor-pointer px-5 py-3 rounded-sm  hover:text-white hover:bg-cyan-500 duration-200 transition-all ease-in-out">
              <Link to='/services' className="flex gap-2 items-center">Services  <ChevronDown />
              <span className="h-10 w-full absolute top-0 hidden group-hover:block opacity-0" />
              <div className="absolute top-20 opacity-0 translate-y-[-10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all ease-linear duration-300 z-10">
                <ul className="bg-white w-60 flex flex-col text-left text-base text-black rounded-md shadow-xl">
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

            <li className="px-5 py-3 rounded-sm  hover:text-white hover:bg-cyan-500 duration-200 transition-all cursor-pointer ease-in-out"> <Link to='/contact'>Contact</Link></li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              <button className="outline-none px-5 py-2 capitalize bg-yellow-500 rounded-3xl hover:bg-yellow-400 transition-all text-white cursor-pointer active:scale-105">
                login
              </button>
              <button className="outline-none px-7 py-2 bg-sky-500 text-white rounded-3xl  capitalize cursor-pointer hover:bg-sky-400 transition-all active:scale-105">
                register
              </button>
            </div>
            <div className="lg:hidden">
              <button onClick={()=>handleClick()}>
                <Menu />
              </button>
            </div>
          </div>
          <ul className={`absolute top-36 flex flex-col ${isShowMenu ? "block" : "hidden"} ease-in-out transition-all duration-300  bg-gray-100 left-0 right-0 rounded-md`}>
            <li><Link className="inline-block w-full py-3 px-5 rounded-md capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer duration-300" to='/'>Home</Link></li>
            <li><Link className="inline-block w-full py-3 px-5 rounded-md capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer duration-300" to='/about'>About </Link></li>
            <li><Link className="inline-block w-full py-3 px-5 rounded-md capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer duration-300" to='/services'>Services</Link></li>
            <li><Link className="inline-block w-full py-3 px-5 rounded-md capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer duration-300" to='/contact'>Contact</Link></li>
            <li className="py-3 px-5 rounded-md block md:hidden capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Login</li>
            <li className="py-3 px-5 rounded-md block md:hidden capitalize hover:bg-cyan-500 hover:text-white transition-all ease-in-out cursor-pointer  duration-300">Register</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
