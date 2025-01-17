import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { easeIn } from "motion";

function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const maincontrol = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrol.start("visible");
    }
  }, [isInView, maincontrol]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={maincontrol}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
