import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

function MobileMenu({ menuList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const subMenuAnimate = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  const handleClick = async (path, isClicked, index, hasSubMenu) => {
    // Toggle animation state first
    if (hasSubMenu) {
      setIsOpen(true);
    } else {
      setIsOpen((prev) => !prev);
    }

    setClicked((prev) => (isClicked ? null : index));

    // Delay navigation slightly to let the animation finish
    if (path) {
      setTimeout(async () => {
        await navigate(path);
      }, 300); // Match this with the animation duration
    }
  };

  const submenuNavigate = async (path) => {
    setIsOpen((prev) => !prev);

    if (path) {
      setTimeout(async () => {
        try {
          await navigate(path);
        } catch (error) {
          console.error("Navigation failed:", error);
        }
      }, 300); // Match this with the animation duration
    }
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="relative z-[999]">
        {isOpen ? (
          <X className="w-7 h-7 md:w-10 md:h-10" />
        ) : (
          <Menu className="w-7 h-7 md:w-10 md:h-10" />
        )}
      </button>
      <div
        className={`fixed top-20 sm:top-24 right-0 left-0 overflow-y-auto h-full ${
          isOpen ? "bg-gray-200" : "hidden"
        } p-6`}
      >
        <ul>
          {menuList.map((menu, i) => {
            const hasSubMenu = menu?.subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <motion.li
                key={menu.name}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{
                  duration: 0.3, // Slightly increased duration for smoother transitions
                  ease: "easeOut",
                }}
              >
                <button
                  onClick={() =>
                    handleClick(menu.path, isClicked, i, hasSubMenu)
                  }
                  className="w-full flex items-center justify-between p-4 hover:bg-cyan-500 hover:text-white cursor-pointer rounded-md relative"
                >
                  {menu?.name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`w-6 h-6 group-hover/link:rotate-180 duration-300 transition-all ${
                        isClicked && "rotate-180"
                      }`}
                    />
                  )}
                </button>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    className="ml-5"
                  >
                    {menu?.subMenu?.map((submenu, i) => {
                      return (
                        <li key={submenu.name}>
                          <button
                            onClick={() => submenuNavigate(submenu.path)}
                            className="inline-block text-start p-3 hover:bg-white/50 w-full rounded-md"
                          >
                            {submenu.name}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
