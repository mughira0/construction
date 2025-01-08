'use client'

import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Services: Building Dreams into Reality
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From design to construction, we offer a comprehensive suite of services tailored to your needs.
        </motion.p>
        <motion.button
          className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Explore Services</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary-dark"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </section>
  )
}

