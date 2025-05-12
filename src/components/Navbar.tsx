import arrow from "/arrow.svg";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';



const Navbar = () => {
  const [isHover, setIsHover] = useState(false);




  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 }
    })
  };




  return (
    <div id="navbar-home" className="flex justify-between items-center h-[12vh] px-6 md:px-[3.8rem] lg:px-[6.2rem] z-20 w-full lg:pt-4">
      <Link to={"/"} className="text-white font-bold md:text-3xl text-xl">
        <h1>Imaginum</h1>
      </Link>

      {/*  <motion.button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative overflow-hidden rounded-full px-4 md:px-6 py-[1vh] md:py-2 flex items-center bg-black shadow-[0px_4px_20px_0px_#398FFF66]"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHover ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full bg-white z-0"
        />

        <div
          onClick={() => {
            document
              .getElementById("contact-home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative z-10 flex items-center gap-2 cursor-pointer"
        >
          <motion.p
            className="font-poppins text-[0.6rem] md:text-base"
            animate={{ color: isHover ? "#000000" : "#FFFFFF" }}
            transition={{ duration: 0.3 }}
          >
            Contact us
          </motion.p>
          <motion.img
            src={arrow}
            alt="#"
            className="h-3 md:h-4"
            animate={{ filter: isHover ? "invert(1)" : "invert(0)" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button> */}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className=" absolute right-[9.2vw] h-[5.8vh] flex justify-center items-center bg-transparent/10 shadow-3xl z-40 p-4  rounded-2xl border-1 border-gray-700 backdrop-blur-sm"
          >
            <div className="hidden md:block">
            <nav className="flex flex-row gap-6 ">
              <motion.a
                custom={0}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover={{ x: -5, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                className="text-base font-semibold text-white  transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
                 onClick={() => {
                    document
                      .getElementById("navbar-home")
                      ?.scrollIntoView({ behavior: "smooth" }); 
                  }}
              >
                Home
              </motion.a>

              <motion.a
                custom={1}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover={{ x: -5, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                className="text-base font-semibold text-white  transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
                 onClick={() => {
                    document
                      .getElementById("about-home")
                      ?.scrollIntoView({ behavior: "smooth" }); 
                  }}
              >
                About
              </motion.a>

              <motion.a
                custom={2}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover={{ x: -5, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                className="text-base font-semibold text-white  transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
                onClick={() => {
                    document
                      .getElementById("project-home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
              >
                Projects
              </motion.a>

              <motion.a
                custom={3}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                whileHover={{ x: -5, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                className="text-base font-semibold text-white  transition-all duration-300 ease-out 
             hover:scale-110 hover:-translate-x-1 hover:text-transparent 
             hover:font-semibold hover:shadow-md 
             bg-gradient-to-r from-white to-gray-400 bg-clip-text 
             before:absolute before:bottom-0 before:left-0 before:h-0.5 
             before:w-0 before:bg-gradient-to-r before:from-white before:to-gray-500 
             before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
              onClick={() => {
                    document
                      .getElementById("contact-home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
              >
                Contact
              </motion.a>
            </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>


      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={!isOpen ? { scale: 1.1, rotate: 5 } : {}}
        className={`absolute hidden md:block right-[5.8vw] z-50 p-2 rounded-full shadow-md transition-colors ${isOpen
          ? 'bg-red-700 hover:bg-red-600 hover:scale-[125%] text-white'
          : 'bg-gray-800 hover:bg-gray-700 text-white'
          }`}
      >
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: isOpen ? 1.1 : 1, rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {isOpen ? <X size={17} /> : <Menu size={20} />}
        </motion.div>
      </motion.button>



    </div>
  );
};

export default Navbar;
