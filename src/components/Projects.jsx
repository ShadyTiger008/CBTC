import React from 'react'
import { projects } from '../data';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-evenly my-24 gap-4"
      id="project"
    >
      {projects &&
        projects.map((n) => (
          <div
            className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
            key={n.id}
          >
            <p className="text-md text-textBase font-medium uppercase">
              {n.name.length > 25 ? `${n.name.slice(0, 20)}...` : n.name}
            </p>
            <img
              src={n.imageSrc}
              alt=""
              className="w-full h-full object-cover rounded-md my-4"
            />
            <div className="flex flex-1 items-center justify-between">
              <p className="text-lg text-gray-300">
                Technologies
                <span className="block text-sm text-gray-500">{n.tech}</span>
              </p>
              <a href={n.github}>
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="text-textBase text-3xl cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#f0f0f0"
                    viewBox="0 0 256 256"
                  >
                    <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
                  </svg>
                </motion.div>
              </a>
            </div>
            <motion.a
              href={n.live}
              whileTap={{ scale: 0.8 }}
              className="text-textBase text-lg cursor-pointer hover:underline"
            >
              Watch Live
            </motion.a>
          </div>
        ))}
    </section>
  );
}

export default Projects
