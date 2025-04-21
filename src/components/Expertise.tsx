import TechCards from "./TechCards";
import exp1 from "/exp1.svg";
import exp2 from "/exp2.svg";
import exp3 from "/exp3.svg";
import exp4 from "/exp4.svg";
import exp5 from "/exp5.svg";
import exp6 from "/exp6.svg";
import react from "/react.svg";
import next from "/next.svg";
import tailwind from "/tailwind.svg";
import node from "/node.svg";
import socket from "/socket.svg";
import square from "/square.svg";
import jwt from "/jwt.svg";
import reactnative from "/reactnative.svg";
import firebaseauth from "/firebaseauth.svg";
import figma from "/figma.svg";
import aws from "/aws.svg";
import sql from "/sql.svg";
import postgres from "/postgres.svg";
import redis from "/redis.svg";
import vercel from "/vercel.svg";
import git from "/git.svg";

const Expertise = () => {
  return (
    <>
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 md:px-[6.6vw]  lg:px-[6rem] flex flex-col gap-4 md:mt-36 mt-24 " id="expertise-home">
        <div className="flex items-center">
          <img
            src={square}
            alt="Square Icon"
            className="size-9"
            loading="lazy"
          />{" "}
          {/* Lazy load */}
          <h1 className="pl-4  md:pl-[1rem]">Expertise</h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.50px] outline-cyan-400/40 rounded"></div>
      </div>

      <div className="px-6 md:px-[6.6vw]  lg:px-[6rem] text-3xl md:text-4xl lg:text-6xl mt-4">
        <h1 className="text-[#A1B0D1] font-figtree font-semibold">
          We combine <span className="text-white">technical</span> <br />
          <span className="text-white">excellence</span> with creative
          innovation <br />
          to deliver outstanding solutions.
        </h1>
      </div>

      <div className="flex flex-col items-center w-full px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 md:gap-x-5 md:px-5 lg:px-0  gap-x-16  md:gap-y-10 gap-y-10 lg:gap-y-10 mt-24 w-full max-w-7xl">
          <TechCards
            icon={exp1}
            title="Frontend Development"
            description="Crafting sleek, responsive, and intuitive user experiences with the latest frontend technologies."
            techStack={["React Js", "Next Js", "Tailwind CSS"]}
            ic={[react, next, tailwind]}
          />
          <TechCards
            icon={exp2}
            title="Backend Development"
            description="Building secure, high-performance backend systems with modern tech."
            techStack={["Node Js", "Express Js", "Socket io", "JWT"]}
            ic={[node, next, socket, jwt]}
          />
          <TechCards
            icon={exp3}
            title="Mobile Development"
            description="Building intuitive and scalable native and cross-platform mobile apps."
            techStack={["React Native", "Firebase Auth"]}
            ic={[reactnative, firebaseauth]}
          />
          <TechCards
            icon={exp4}
            title="UI/UX Design"
            description="Crafting intuitive designs for smooth, engaging user experiences."
            techStack={["Figma"]}
            ic={[figma]}
          />
          <TechCards
            icon={exp5}
            title="Database Management"
            description="Designing scalable and secure database solutions for complex needs."
            techStack={["Mongo DB", "MYSQL", "PostgreSQL", "Redis", "Firebase"]}
            ic={[react, sql, postgres, redis, firebaseauth]}
          />
          <TechCards
            icon={exp6}
            title="Tools & Platforms"
            description="Leveraging advanced tools and platforms to build innovative, high-performance solutions."
            techStack={["AWS", "Vercel", "Git", "Figma"]}
            ic={[aws, vercel, git, figma]}
          />
        </div>
      </div>
    </>
  );
};

export default Expertise;
