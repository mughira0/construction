'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Build with Us?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lets turn your vision into reality. Contact us today to get started on your next project.
        </motion.p>
        <motion.button
          className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Contact Us Today
        </motion.button>
      </div>
    </section>
  )
}
// 

