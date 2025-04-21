import hexa from "/Hexagons.svg";
import element from "/element.svg";
import Card from "./Cards";
import proj1 from "/proj1.svg";
import proj2 from "/proj2.svg";
import proj3 from "/proj3.svg";
import square from "/square.svg";
import more from "/gradient.png";
import { Toaster } from "react-hot-toast";
import { motion, animate, useMotionValue, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CardWrapper = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const img1X = useMotionValue(90);
  const img1Y = useMotionValue(0);

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <>
      <Toaster position="top-center"  />

      {/* Draggable element */}
      <motion.img
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
        alt="Draggable Element"
        className="absolute h-28 md:h-35  md:top-[139rem] lg:h-40 lg:top-[112rem] md:left-32 left-2 top-[121rem] z-20 cursor-grab active:cursor-grabbing md:block"
        loading="lazy" // Lazy load image
      />

      {/* Background Hexagon */}
      <img
        src={hexa}
        alt="Background Hexagon"
        className="md:h-[30rem] h-[20rem] ml-4 absolute"
        loading="lazy" // Lazy load image
      />

      {/* Title Section */}
      <motion.div 
        ref={titleRef}
        variants={fadeInUp}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[6.6vw]  lg:px-[6rem] flex flex-col gap-4 mt-48"
      >
        <div className="flex items-center" id="project-home">
          <img
            src={square}
            alt="Square Icon"
            className="size-9"
            loading="lazy"
          />
          <h1 className="pl-4 md:pl-[1rem]">Our Projects</h1>
        </div>
        <div className="border-gradient-custom w-[7rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
      </motion.div>

      {/* Subheading */}
      <motion.div
        ref={headingRef}
        variants={fadeInUp}
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
        className="px-6 md:px-[6.6vw]  lg:px-[6rem] text-3xl md:text-5xl lg::text-6xl mt-4"
      >
        <h1 className="text-[#A1B0D1] font-geist font-semibold">
          We build <br />
          real world <span className="text-white">projects</span> that <br />
          create impact
        </h1>
      </motion.div>

     
      <div className="flex flex-col">
        <CardWrapper delay={0.1}>
          <Card
            image={proj1}
            name="CSED VIT"
            subtitle="Official Website"
            description="Created the official website for the CSED Club, enhancing their digital presence by showcasing events,projects, and resources, and enabling better engagement with members and visitors."
            tags={["HTML", "CSS", "JS", "GSAP", "Swiper Js", "JQuery"]}
            liveUrl="https://csedvit.com/"
            buttonText="View Website"
            imagePosition="right"
            statuss="Live"
          />
        </CardWrapper>

        <CardWrapper delay={0.2}>
          <Card
            image={proj2}
            name="CAMPUSMART"
            subtitle="Shopping platform"
            description="Campus Mart is a marketplace built for college students. It makes buying and selling items like books, gadgets, and projects easy on campus. The platform features a clean and user-friendly design."
            tags={[
              "React Js",
              "Node Js",
              "Express Js",
              "Mongo DB",
              "Socket io",
              "Tailwind CSS",
            ]}
            liveUrl=""
            buttonText="View Website"
            imagePosition="left"
            statuss="In Progress"
          />
        </CardWrapper>

        <CardWrapper delay={0.3}>
          <Card
            image={proj3}
            name="CABSYNC"
            subtitle="A Travel Partner"
            description="CAB SYNC helps college students find travel partners for shared rides. Students can search for others going to the same destination or create rooms to connect with peers."
            tags={["React Native", "Node Js", "Socket io", "Firebase"]}
            liveUrl=""
            buttonText="View Website"
            imagePosition="right"
            statuss="In Progress"
          />
        </CardWrapper>

        <CardWrapper delay={0.4}>
          <Card
            image={more}
            name="MORE PROJECT"
            subtitle="COMING SOON.."
            description="We get ideas all day . All of them are updated here as soon as we start working on them."
            tags={[]}
            liveUrl=""
            buttonText="Coming Soon"
            imagePosition="left"
            statuss="Initializing..."
          />
        </CardWrapper>
      </div>
    </>
  );
};

export default Projects;
