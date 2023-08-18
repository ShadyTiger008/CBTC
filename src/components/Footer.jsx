import React from 'react'
import { motion } from "framer-motion";


const Footer = () => {
  return (
      <footer className="bg-primary py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex items-center justify-center"
        >
          <p className="text-white text-sm">
            © 2023 Soumyajeet Chatterjee. All rights reserved.
          </p>
        </motion.div>
      </footer>
  );
}

export default Footer
