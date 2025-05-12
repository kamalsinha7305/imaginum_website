import element from "/element.svg";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useRef, useState } from "react";
import darrow from "/darrow.svg";
import Loader from "./Loader"; // Import the Loader component



 


const Hero = () => {
  const img1X = useMotionValue(90);
  const img1Y = useMotionValue(0);
  const img2X = useMotionValue(-90);
  const img2Y = useMotionValue(-10);
  const [isHover, setIsHover] = useState(false);

  // Ref to monitor if the container is in view for animations
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <>
      <Loader /> {/* Show loader when the page is loading */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:min-h-[85vh] min-h-[48vh] flex flex-col justify-between mt-16 py-8 px-6 md:px-12"
      >
        <div className="flex flex-col items-center gap-6 text-center mt-6 ms:mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-4 py-1 text-[#D4FA00] border border-[#D4FA00] rounded-full text-[2.8vw] sm:text-[2.9vw] md:text-sm font-lexend font-light"
          >
            Innovate • Design • Build
          </motion.div>

          <motion.h1
            className="font-bold text-white text-[1.35rem] sm:text-[1.3vw] md:text-[2.5rem] lg:text-[3rem] capitalize leading-[140%]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Building the future with smart,
            <br />
            seamless technology.
          </motion.h1>

          <motion.button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-md px-4 md:px-6 py-2 flex items-center shadow-[0px_4px_20px_0px_#398FFF66] bg-white"
            aria-label="Explore Now Button"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHover ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full bg-black z-0"
            />

            <div
              onClick={() => {
                document
                  .getElementById("about-home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative z-10 flex items-center gap-2 cursor-pointer"
            >
              <motion.p
                className="font-poppins text-[0.7rem] md:text-base"
                animate={{ color: isHover ? "#FFFFFF" : "#000000" }}
                transition={{ duration: 0.3 }}
              >
                Explore Now
              </motion.p>
              <motion.img
                src={darrow}
                alt="Down arrow"
                className="h-3 md:h-4"
                animate={{
                  filter: isHover ? "invert(1)" : "invert(0)",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* No animation here now */}
        <div className="h-[28rem] md:h-[22.9rem] lg:flex items-center justify-center font-raleway lg:mt-12 mx-4">
          <TextHoverEffect text="IMAGINUM" />
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          style={{ x: img1X, y: img1Y }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
          dragMomentum={false}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ zIndex: 50 }}
          onDragEnd={() => {
            animate(img1X, 90, { type: "spring", stiffness: 200 });
            animate(img1Y, 0, { type: "spring", stiffness: 200 });
          }}
          src={element}
          alt="Rotating element image"
          loading="lazy"
          className="absolute h-28 md:h-37 md:top-[23.7rem] md:left-[1.5rem] lg:h-40 lg:top-[22rem] lg:left-6 left-[-12vw] top-[29rem] cursor-grab active:cursor-grabbing"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ x: img2X, y: img2Y }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.8}
          dragMomentum={false}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ zIndex: 50 }}
          onDragEnd={() => {
            animate(img2X, -90, { type: "spring", stiffness: 200 });
            animate(img2Y, -10, { type: "spring", stiffness: 200 });
          }}
          src={element}
          alt="Rotating element image"
          loading="lazy"
          className="absolute h-24 md:h-28 lg:h-28 top-[8rem] md:right-12 right-[-12vw] cursor-grab active:cursor-grabbing"
        />
      </motion.div>
    </>
  );
};

export default Hero;
