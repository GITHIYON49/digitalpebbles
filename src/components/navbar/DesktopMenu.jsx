import React, { useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);

  const toggleIsHover = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <motion.li
      className="relative"
      onHoverStart={toggleIsHover}
      onHoverEnd={toggleIsHover}
    >
      <Link
        to={menu.path}
        className="flex items-center gap-1 group/link hover:bg-cyan-500 hover:text-white text-lg text-gray-800 font-semibold py-2 px-5 rounded-lg cursor-pointer"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="w-6 h-6 group-hover/link:rotate-180 duration-300 transition-all" />
        )}
      </Link>
      {hasSubMenu && (
        <span className="inline-block top-10 cursor-pointer absolute opacity-0 inset-0 h-40" />
      )}
      {hasSubMenu && (
        <motion.div
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          className="absolute top-20 bg-white w-52 p-3 rounded-lg"
        >
          <div>
            {menu?.subMenu?.map((submenu, i) => {
              return (
                <div key={i}>
                  <Link
                    className="inline-block p-3 hover:bg-cyan-500 hover:text-white rounded-lg transition-all duration-100"
                    to={submenu.path}
                  >
                    {submenu.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}

export default DesktopMenu;
