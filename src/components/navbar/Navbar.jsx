import React from "react";
import { digitalpebbles } from "../../assets/images";
import { menuList } from "../../data/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <header className="h-auto py-3 w-full text-base sticky top-0  flex items-center bg-white shadow-xl z-[999]">
        <nav className="w-full max-w-7xl mx-auto px-3.5 flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="flex items-center relative z-[999] cursor-pointer"
            >
              <img
                src={digitalpebbles}
                alt="logo"
                className="w-28 sm:w-36 lg:w-40 h-auto object-cover"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-x-16">
            {menuList.map((menu, i) => {
              return <DesktopMenu menu={menu} key={menu.name} />;
            })}
          </ul>
          <div className=" lg:hidden">
            <MobileMenu menuList={menuList} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
