import React from 'react'
import { motion } from "framer-motion";
import { socialLinks } from "../data";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full my-24"
      id="contact"
    >
      <p className="text-2xl text-gray-400 capitalize mb-5">Follow me on</p>
      {socialLinks && (
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((socials) => {
            const {id, link, style, name, iconSrc} = socials;
            return (<motion.a
              whileTap={{ scale: 0.8 }}
              className={`w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl ${style} duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3`}
              key={id}
              href={link}
              target='_blank'
            >
              {iconSrc}
              <p className="text-lg text-textBase">{name}</p>
            </motion.a>)
          } )}
        </div>
      )}
    </section>
  );
}

export default Contact
