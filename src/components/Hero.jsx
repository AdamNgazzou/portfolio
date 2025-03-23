import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";

const Hero = () => {
  const [text, setText] = useState("");
  const toType = "Software Developer";
  useEffect(() => {
    setText(""); // Reset text when effect runs
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => toType.slice(0, index + 1));
      index++;

      if (index === toType.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-6xl font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Adam Ngazzou
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-4xl mt-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {text}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 text-lg max-w-2xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Welcome to my personal portfolio. I am passionate about creating interactive applications and experiences on the web.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 px-6 py-3 bg-secondary text-white rounded-lg shadow-lg"
        >
          Get in Touch
        </motion.a>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;