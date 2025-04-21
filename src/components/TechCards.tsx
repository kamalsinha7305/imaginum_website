import { motion } from "framer-motion";

interface techCardsProps {
  icon: string;
  title: string;
  description: string;
  techStack: string[];
  ic: string[];
}

const TechCards = ({
  icon,
  title,
  description,
  techStack,
  ic,
}: techCardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-[0.4px] w-full max-w-md bg-gradient-to-l from-black to-blue-600 shadow-lg outline outline-1 outline-offset-[-1px] outline-black"
    >
      <div className="rounded-2xl bg-[linear-gradient(15.29deg,#000000_-18.99%,#0055FF_328.64%)] p-6 text-white w-full h-full flex flex-col justify-between min-h-[380px]">
        <div>
          <div className="rounded-xl w-12 h-12 flex items-center justify-center mb-4">
            <img src={icon} className="w-12 h-12 object-contain" alt="Icon" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-base text-gray-300">{description}</p>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <p className="text-sm text-[#CECECE] mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-1 bg-white/10 rounded-md px-3 py-[0.8vh] text-sm"
              >
                <img src={ic[i]} alt="image" width={16} height={16} />
                <span className="capitalize">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCards;
