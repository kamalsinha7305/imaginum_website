import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vite from "/vite.svg";
import figma from "/figma.svg";
import react from "/react.svg";
import github from "/github.svg";
import express from "/express.svg";
import js from "/js.svg";
import tailwind from "/tailwind.svg";
import mongodb from "/mongo.svg";
import logo from "/logo.svg";

interface IconProps {
  src: string;
  radius: number;
  angle: number;
  direction: number;
}

const OrbitingIcon: React.FC<IconProps> = ({ src, radius, angle, direction }) => {
  return (
    <motion.div
      className="absolute"
      style={{ width: "12vw", height: "12vw" }}
      animate={{ rotate: direction * 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <div
        className="absolute"
        style={{
          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
        }}
      >
        <img src={src} alt="icon" className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw]" />
      </div>
    </motion.div>
  );
};

const OrbitComponent: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRadius = (vw: number) => (screenWidth * vw) / 100;

  const isMobile = screenWidth < 768; // Tailwind 'md' breakpoint

  const techIcons: IconProps[] = [
    // Inner orbit (clockwise)
    { src: vite, radius: getRadius(isMobile ? 24 : 12), angle: 0, direction: 1 },
    { src: figma, radius: getRadius(isMobile ? 24 : 12), angle: 90, direction: 1 },
    { src: react, radius: getRadius(isMobile ? 24 : 12), angle: 180, direction: 1 },
    { src: github, radius: getRadius(isMobile ? 24 : 12), angle: 270, direction: 1 },
  
    // Outer orbit (anti-clockwise)
    { src: express, radius: getRadius(isMobile ? 35 : 20), angle: 45, direction: -1 },
    { src: js, radius: getRadius(isMobile ? 35 : 20), angle: 135, direction: -1 },
    { src: tailwind, radius: getRadius(isMobile ? 35 : 20), angle: 225, direction: -1 },
    { src: mongodb, radius: getRadius(isMobile ? 35 : 20), angle: 315, direction: -1 },
  ];
  
  

  return (
    <div className="relative w-[90vw] h-[60vh] md:w-[40vw] md:h-[80vh] overflow-hidden flex items-center justify-center">
      <div className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full bg-blue-600 blur-3xl opacity-30"></div>
      <div className="absolute w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] bg-black rounded-full border-4 border-lime-400 flex items-center justify-center z-10">
        <img src={logo} alt="Company Logo" className="w-[14vw] h-[14vw] md:w-[7vw] md:h-[7vw]" />
      </div>

      {techIcons.map((icon, index) => (
        <OrbitingIcon key={index} {...icon} />
      ))}
    </div>
  );
};

export default OrbitComponent;
