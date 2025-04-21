import { motion } from "framer-motion";
import linkedin from "/link-black.svg";
import x from "/xblack.svg";
import sarthak from "/sarthak.png";
import kamal from "/kamal.png";
import anurag from "/anurag.png";
import utkarsh from "/utkarsh.png";
import square from "/square.svg";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarthak Krishak",
      title: "Co-founder | CEO",
      description:
        "Driven CEO and development expert, leading the company to create innovative, user-focused solutions.",
      image: sarthak,
    },
    {
      name: "Kamal Sinha",
      title: "Co-founder | CTO",
      description:
        "Innovative CTO with expertise in tech development, driving user-centered, cutting-edge solutions.",
      image: kamal,
    },
    {
      name: "Anurag Adarsh",
      title: "CPO | Head of Design",
      description:
        "Creative CPO and Head of Design, shaping product vision and user experiences to drive innovation.",
      image: anurag,
    },
    {
      name: "Utkarsh Raj",
      title: "Head of Development",
      description:
        "Visionary Head of Development, leading teams to build innovative and scalable technology solutions.",
      image: utkarsh,
    },
  ];

  return (
    <section aria-labelledby="team-heading" id="team-home">
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 lg:px-[6rem] md:px-[6.6vw]  flex flex-col gap-4 md:mt-36 mt-24 mb-10">
        <div className="flex items-center">
          <img src={square} alt="Team section icon" className="size-9" />
          <h1 id="team-heading" className="pl-4 md:pl-[1rem]">
            Our Team
          </h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.5px] outline-cyan-400/40 rounded"></div>
      </div>

      <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:ml-[2.6vw] md:ml-0 px-[12vw]  gap-6 lg:gap-0 md:px-[6.6vw] ">
        {teamMembers.map((member, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[70vw] sm:w-[70vw]  md:w-[38vw] lg:w-[17.5vw] bg-gradient-to-tl from-[#000000] to-[#002774] border border-[#575757]   rounded-xl overflow-hidden flex flex-col  "
          >
            {/* Top Section */}
            <div className="relative bg-[#f1f1f1] h-[220px] flex justify-center items-end px-4">
              {/* Social Icons */}
              <div className="absolute top-2 right-2 flex gap-2 z-10">
                <a href="#" aria-label="Close">
                  <img src={x} alt="Close" className="w-7 h-7 p-1" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img src={linkedin} alt="LinkedIn" className="w-7 h-7 p-1" />
                </a>
              </div>

            
              <img
                src={member.image}
                alt={member.name}
                className=" lg:object-contain lg:w-full lg:max-h-fit h-full lg:size-[60vw] md:size-[32vw]"
                loading="lazy"
              />
            </div>

            <div className="px-4 py-5 flex flex-col gap-2 text-white">
              <div>
                <h1 className="font-bold text-lg">{member.name}</h1>
                <h2 className="text-[#ADCC00] text-sm">{member.title}</h2>
              </div>
              <p className="text-[#a2a2a2] text-sm">{member.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
