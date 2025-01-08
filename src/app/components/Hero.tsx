'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Dreams, Crafting Reality
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your vision, our expertise. Lets construct something extraordinary.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors">
            View Our Projects
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

