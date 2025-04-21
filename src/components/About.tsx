import { useEffect, useState } from "react";
import { OrbitingCircles, Icons } from "./magicui/orbiting-circles";
import img1 from "/img1.svg";
import img2 from "/img2.svg";
import img3 from "/img3.svg";
import img4 from "/img4.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import square from "/square.svg";

const title = ["Innovation", "Integrity", "Creativity", "Excellence"];
const desc = [
  "Constantly pushing boundaries and exploring new technologies",
  "Building trust through honesty and transparency",
  "Bringing unique and artistic perspectives to every project",
  "Delivering nothing short of the highest quality work",
];
const image = [img1, img2, img3, img4];

const About = () => {
  const [radiusLarge, setRadiusLarge] = useState(200);
  const [radiusSmall, setRadiusSmall] = useState(130);
  const [sizeset, setSizeset] = useState(38);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for "About us" title
    gsap.fromTo(
      "#about-home h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#about-home h1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animation for the section with images and text (titles and descriptions)
    gsap.utils.toArray(".section-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, // Stagger animation for each item
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    // Animation for orbiting circles
    gsap.fromTo(
      ".orbiting-circles",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".orbiting-circles",
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    // Resize handler for responsiveness
    const handleResize = () => {
      const width = window.innerWidth;
      setRadiusLarge(width < 768 ? 150 : 220);
      setRadiusSmall(width < 768 ? 100 : 150);
      setSizeset(width < 768 ? 32 : 48);
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about-home" className="relative">
      {/* Title */}
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 lg:px-[6rem] md:px-[6.6vw]  flex flex-col gap-4">
        <div className="flex items-center">
          <img src={square} alt="image" className="size-7 md:size-9" />
          <h1 className="pl-4 md:pl-[1rem]">About us</h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
      </div>

      {/* Intro */}
      <div className="px-6 lg:px-[6rem] md:px-[6.6vw] text-3xl md:text-5xl lg:text-6xl mt-4 md:mb-[6vh] lg:mb-0 mb-0 ">
        <h1 className="text-[#A1B0D1] font-geist font-semibold">
          Innovating <br />
          with <span className="text-white">technology</span> to create <br />a
          smarter future.
        </h1>
      </div>

      {/* Image & Titles Section */}
      <div className="flex flex-col lg:flex-row px-6 md:px-[6rem] md:mt-0 gap-14 lg:gap-8 items-center justify-between mt-12 lg:mt-[-5vh]">
        <div className="grid grid-cols-2 gap-10">
          {title.map((e, i) => (
            <div
              key={i}
              className="section-item max-w-[90vw] sm:w-[15rem] flex flex-col items-center gap-3"
            >
              <div className="flex flex-col items-center gap-2">
                <img
                  src={image[i]}
                  alt="icon"
                  className="h-[2.5rem] md:h-[2.5rem]"
                />
                <h1 className="text-white text-[1.25rem] md:text-[1.7rem] font-medium">
                  {e}
                </h1>
              </div>
              <p className="text-white text-center px-4 sm:px-10 lg:text-base text-xs font-light mt-[-1vh] lg:mt-[-1vh] leading-5">
                {desc[i]}
              </p>
            </div>
          ))}
        </div>

        {/* Orbiting Circles */}
        <div className="flex items-center justify-center lg:mr-[-2vw]">
          <div className="relative w-[95vw] lg:h-[95vw] max-w-[700px] max-h-[700px] min-w-[320px] min-h-[320px] aspect-square">
            <OrbitingCircles iconSize={sizeset} radius={radiusLarge}>
              <Icons.figma />
              <Icons.github />
              <Icons.nextjs />
              <Icons.mongodb />
            </OrbitingCircles>
            <OrbitingCircles
              iconSize={sizeset}
              radius={radiusSmall}
              reverse
              speed={1}
            >
              <Icons.react />
              <Icons.node />
              <Icons.tailwind />
              <Icons.js />
              <Icons.html />
            </OrbitingCircles>

            {/* Centered Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute lg:w-52 lg:h-52 w-44 h-44 rounded-full bg-gradient-to-b from-blue-600/70 blur-xl z-0" />
              <div className="relative z-10 w-20 h-20 md:w-26 md:h-26 rounded-full bg-gradient-to-b from-orange-500 via-cyan-400 to-violet-700 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="w-14 h-14 md:w-20 md:h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute top-[12vh] md:top-[15vh] left-1/6 -translate-x-1/2 md:left-[-15rem] md:translate-x-0 -z-[20]">
        <div className="h-[22rem] w-[24rem] md:h-[32rem] md:w-[30rem] rounded-full opacity-40 bg-[conic-gradient(from_177deg_at_50.00%_50.00%,_#2B6ED1_59deg,_#062550_247deg,_#006FFF_360deg)] blur-3xl" />
      </div>
    </div>
  );
};

export default About;
