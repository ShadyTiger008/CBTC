import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1C36Zk20dudRvDMv6Ks81Ghihy3GmCxg3/view?usp=sharing";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
      id="about"
    >
      {/* Image */}
      <div className="w-full h-420 flex items-center justify-center">
        <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
          <img
            src="./profile.jpeg"
            alt=""
            className="w-full h-full absolute left-4 top-4 object-cover rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
      {/* Content Box */}
      <div className="w-full h-420 flex flex-col items-center justify-center">
        <p className="text-lg text-textBase text-center">
          I am a dedicated B.Tech student with a strong foundation in web
          development. Proficient in HTML, CSS, and JavaScript, I have developed
          web applications using ReactJS, NextJS, and Tailwind CSS. Skilled in
          Node.js, Express.js, and MongoDB, I have built robust and scalable
          applications. Seeking opportunities to contribute to innovative
          projects with my versatile skills in Java, C, and Python.
        </p>
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
          onClick={handleDownloadCV}
        >
          <span className="w-full md:w-auto relative px-5 py-2.5 translation-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Download
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default About;
