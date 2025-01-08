'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { id: 1, name: 'TechCorp', logo: '/images/c1.png' },
  { id: 2, name: 'EcoBuilders', logo: '/images/c2.png' },
  { id: 3, name: 'UrbanDev', logo: '/images/c3.png' },
  { id: 4, name: 'InnoSpace', logo: '/images/c1.png' },
  { id: 5, name: 'GreenHomes', logo: '/images/c2.png' },
  { id: 6, name: 'MetroWorks', logo: '/images/c3.png' },
]

export default function Clients() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Trusted Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={client.logo} alt={client.name} width={120} height={60} className="max-w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

