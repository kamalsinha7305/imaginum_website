import { motion } from "framer-motion";
import box from "/box.svg";
import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import insta from "/insta.svg";
import contactbg from "/contactbg.svg";

const Contact = () => {
  return (
    <div
      id="contact-home"
      className="min-h-[70vh] flex items-center justify-center px-4 md:mt-36 mt-24 lg:mb-10 mb-24 md:mb-0"
    >
      <motion.div
        className="rounded-2xl px-8 py-16 md:p-24 mx-[1.2rem] md:mx-[2.9rem] lg:mx-[6rem] text-center w-full text-white shadow-2xl flex flex-col gap-2"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Want to Build something
            <span className="text-[#D4FA00]"> Amazing?</span> Let's discuss.
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg font-medium text-gray-300 mb-6 max-w-2xl mx-auto font-['Figtree'] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let's collaborate and bring your vision to life with our <br />
            technical expertise and creative approach.
          </motion.p>
        </div>

        <div className="flex justify-center lg:mb-6 mb-6 mt-4 md:mb-6 md:mt-4 lg:mt-4">
          <img
            src={box}
            alt="Imaginum logo"
            className="w-8 h-8"
            loading="lazy"
          />
        </div>

        <motion.p
          className="text-white text-lg tracking-widest mb-6 md:mb-6 lg:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row lg:pl-18 lg:pr-18 md:gap-3  gap-2 lg:gap-2 justify-evenly"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:Imaginum.org@gmail.com"
            className="flex items-center gap-2 lg:px-10 px-12  md:py-5 lg:py-4  py-[1.7vh] font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700  bg-black/60 backdrop-blur-md text-white transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:shadow-white/10 hover:bg-white/5  "
          >
            <img
              src={mail}
              alt="Email icon"
              className="md:w-5 md:h-5 w-4 h-4"
              loading="lazy"
            />
            Imaginum.org@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/company/imaginumorgg/"
            target="_blank"
            className="flex items-center gap-2 bg-black/60 lg:px-10 px-12 md:py-5 lg:py-4 py-[1.7vh] font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700   backdrop-blur-md text-white transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:shadow-white/10 hover:bg-white/5 "
          >
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="md:w-5 md:h-5 w-4 h-4"
              loading="lazy"
            />
            /imaginumorgg
          </a>
          <a
            href="https://www.instagram.com/ima.ginum/"
            target="_blank"
            className="flex items-center gap-2 bg-black/60 lg:px-10 px-12 md:py-5 lg:py-4 py-[1.7vh] font-semibold rounded-lg text-sm justify-between md:justify-around lg:w-[19vw] outline outline-1 outline-offset-[-1px] outline-neutral-700   backdrop-blur-md text-white transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:shadow-white/10 hover:bg-white/5"
          >
            <img
              src={insta}
              alt="Instagram icon"
              className="md:w-6 md:h-6 w-5 h-5"
              loading="lazy"
            />
            /ima.ginum
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
