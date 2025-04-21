import { cn } from "@/lib/utils";
import React from "react";
import { LuFigma } from "react-icons/lu";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"; // <-- Only import SiTailwindcss, not LuTailwind

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 200, // Increased radius for larger orbits
  path = true,
  iconSize = 38, // Increased icon size for visibility
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const childrenCount = React.Children.count(children);

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
        className
      )}
      style={{
        width: `${radius * 2 + iconSize}px`,      // <-- add iconSize here
        height: `${radius * 2 + iconSize}px`,     // <-- add iconSize here
        aspectRatio: "1 / 1",
        minWidth: `${radius * 2 + iconSize}px`,   // <-- add iconSize here
        minHeight: `${radius * 2 + iconSize}px`,  // <-- add iconSize here
        maxWidth: "100vw",
        maxHeight: "100vw",
        position: "absolute",
      }}
    >
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Center the SVG inside the container by offsetting with iconSize/2
          style={{
            zIndex: 0,
            position: "absolute",
            left: `${iconSize / 2}px`,
            top: `${iconSize / 2}px`,
          }}
          width={radius * 2}
          height={radius * 2}
          className="pointer-events-none"
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke="#696969"
            strokeWidth={2.5}
            style={{ opacity: 0.8 }}
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / childrenCount) * index;
        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              "--icon-size": `${iconSize}px`,
              willChange: "transform",
              position: "absolute",
              left: "42%",
              top: "43.2%",
              width: "var(--icon-size)",
              height: "var(--icon-size)",
              // This transform ensures the icon is centered on the orbit line
              transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
              transformOrigin: "center center",
              animation: `orbit var(--duration) linear infinite${reverse ? " reverse" : ""}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            } as React.CSSProperties}
            className={cn(
              "rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Add new icons for outer orbit
export const Icons = {
  react: () => (
    <svg viewBox="0 0 256 256" width="100" height="100" fill="none">
      <circle cx="128" cy="128" r="28" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="16" fill="none">
        <ellipse rx="100" ry="40" cx="128" cy="128" transform="rotate(0 128 128)"/>
        <ellipse rx="100" ry="40" cx="128" cy="128" transform="rotate(60 128 128)"/>
        <ellipse rx="100" ry="40" cx="128" cy="128" transform="rotate(120 128 128)"/>
      </g>
    </svg>
  ),
  node: () => (
    <svg viewBox="0 0 256 272" width="100" height="100" fill="none">
      <path fill="#8CC84B" d="M128 0l128 74v124l-128 74L0 198V74z"/>
      <path fill="#fff" d="M128 20l108 62v108l-108 62-108-62V82z"/>
      <path fill="#8CC84B" d="M128 40l88 50v92l-88 50-88-50V90z"/>
      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="60" fontFamily="Arial" dy=".3em">JS</text>
    </svg>
  ),
  tailwind: () => (
    <SiTailwindcss size={100} color="#38BDF8" />
  ),
  js: () => (
    <svg viewBox="0 0 256 256" width="100" height="100" fill="none">
      <rect width="256" height="256" fill="#F7DF1E"/>
      <text x="50%" y="60%" textAnchor="middle" fill="#000" fontSize="80" fontFamily="Arial" dy=".3em">JS</text>
    </svg>
  ),
  html: () => (
    <svg viewBox="0 0 256 256" width="100" height="100" fill="none">
      <polygon points="41,236 16,0 240,0 215,236 128,256" fill="#E44D26"/>
      <polygon points="128,240 195,224 215,20 128,20" fill="#F16529"/>
      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="60" fontFamily="Arial" dy=".3em">HTML</text>
    </svg>
  ),
  figma: () => (
    <LuFigma size={100} color="#fff" />
  ),
  nextjs: () => (
    <SiNextdotjs size={100} color="#fff" />
  ),
  tailwindIcon: () => (
    <svg viewBox="0 0 256 154" width="100" height="100" fill="none">
      <path fill="#38BDF8" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 92.267 28.8 110.4 35.2c11.733 4.267 20.267 16.533 29.867 26.133C155.733 76.8 174.933 89.6 213.333 89.6c34.134 0 55.467-17.067 64-51.2-12.8 17.067-28.266 22.4-46.4 16-11.733-4.267-20.266-16.533-29.866-26.133C185.6 12.8 166.4 0 128 0zM42.667 89.6C8.533 89.6-12.8 106.667-21.333 140.8c12.8-17.067 28.266-22.4 46.4-16 11.733 4.267 20.266 16.533 29.866 26.133C70.4 166.4 89.6 179.2 128 179.2c34.133 0 55.467-17.067 64-51.2-12.8 17.067-28.267 22.4-46.4 16-11.734-4.267-20.267-16.533-29.867-26.133C100.267 102.4 81.067 89.6 42.667 89.6z"/>
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" width="100" height="100" fill="none">
      <path fill="#fff" d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.44 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
    </svg>
  ),
  mongodb: () => (
    <svg viewBox="0 0 256 256" width="100" height="100" fill="none">
      <path d="M128 0C128 0 32 96 128 256C224 96 128 0 128 0Z" fill="#13AA52"/>
      <path d="M128 32C128 32 64 112 128 224C192 112 128 32 128 32Z" fill="#B8C4C2"/>
    </svg>
  ),
};
