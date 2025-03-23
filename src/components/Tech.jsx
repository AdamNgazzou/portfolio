import React from "react";
import { styles } from "../styles";

import skill from "../assets/Skills.png";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const half = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, half);
  const secondRow = technologies.slice(half);

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Used so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>
      <div className='flex flex-col items-center'>
        <div className='flex flex-row flex-wrap justify-center gap-4 mb-4'>
          {firstRow.map((technology) => (
            <div
              className='w-16 h-16 flex items-center justify-center bg-[#251C31] rounded-full' key={technology.name}
            >
              <img src={technology.icon} alt={technology.name} className='w-10 h-10' />
            </div>
          ))}
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-4 '>
          {secondRow.map((technology) => (
            <div
              className='w-16 h-16 flex items-center justify-center bg-[#251C31] rounded-full' key={technology.name}
            >
              <img src={technology.icon} alt={technology.name} className='w-10 h-10' />
            </div>
          ))}
        </div>
        <img src={skill} alt="Skills" />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
