'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    name: 'Commercial Construction',
    description: 'We specialize in building state-of-the-art commercial spaces that meet the highest standards of quality and efficiency. Our team of experts ensures that every project is completed on time and within budget.',
    features: ['Customized Solutions', 'Sustainable Practices', 'Timely Delivery', 'Quality Assurance'],
    image: '/images/house1.jpg',
  },
  {
    name: 'Residential Construction',
    description: 'From single-family homes to multi-unit complexes, we bring your dream home to life. Our residential construction services combine innovative design with superior craftsmanship to create living spaces that last for generations.',
    features: ['Custom Home Design', 'Energy-Efficient Solutions', 'Expert Craftsmanship', 'Transparent Process'],
    image: '/images/hotel1.jpg',
  },
  {
    name: 'Renovation and Remodeling',
    description: 'Transform your existing space with our comprehensive renovation and remodeling services. We breathe new life into old structures, enhancing both functionality and aesthetic appeal.',
    features: ['Creative Design Solutions', 'Minimal Disruption', 'Cost-Effective Options', 'Quality Upgrades'],
    image: '/images/office1.jpg',
  },
]

export default function DetailedServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className="flex flex-col md:flex-row items-center mb-20 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className={`w-full md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className={`w-full md:w-1/2 md:px-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <motion.h3
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {service.name}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {service.description}
              </motion.p>
              <ul className="mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

