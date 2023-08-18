import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1C36Zk20dudRvDMv6Ks81Ghihy3GmCxg3/view?usp=sharing";
    link.download = "cv.pdf";
    link.click();
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">
            Soumyajeet Chatterjee
          </p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
            </a>
            <a
              href="#project"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#c"
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              onClick={handleDownloadCV}
            >
              Download
            </a>
          </div>
          <motion.div
            whileTap={{ scale: 0.5 }}
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#f0f0f0"
              viewBox="0 0 256 256"
            >
              <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
            </svg>
          </motion.div>
          {isActive && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={menuVariants}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
            >
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                About
              </a>
              <a
                href="#project"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                href="#c"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                onClick={handleDownloadCV}
              >
                Download
              </motion.a>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
