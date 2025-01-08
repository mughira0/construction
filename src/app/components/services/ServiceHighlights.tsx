'use client'

import { motion } from 'framer-motion'
import { Building2, PencilRuler, Hammer, Truck, HardHat, Ruler } from 'lucide-react'

const services = [
  { icon: Building2, name: 'Commercial Construction', description: 'Building state-of-the-art commercial spaces.' },
  { icon: PencilRuler, name: 'Architectural Design', description: 'Turning your vision into detailed blueprints.' },
  { icon: Hammer, name: 'Renovation', description: 'Breathing new life into existing structures.' },
  { icon: Truck, name: 'Project Management', description: 'Ensuring your project runs smoothly from start to finish.' },
  { icon: HardHat, name: 'Residential Construction', description: 'Creating homes that last generations.' },
  { icon: Ruler, name: 'Interior Design', description: 'Crafting beautiful and functional interior spaces.' },
]

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.button
                className="text-primary font-semibold hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

