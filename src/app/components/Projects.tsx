'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  { id: 6, title: 'Smart Home Development', category: 'Residential', image: '/images/hotel.jpg' },
  { id: 1, title: 'Modern Office Complex', category: 'Commercial', image: '/images/house1.jpg' },
  { id: 3, title: 'Sustainable Factory', category: 'Industrial', image: '/images/office1.jpg' },
  { id: 4, title: 'Urban Park Renovation', category: 'Public', image: '/images/office2.jpg'},
  { id: 5, title: 'Historic Building Restoration', category: 'Restoration', image: '/images/hotel1.jpg' },
  { id: 2, title: 'Luxury Residential Tower', category: 'Residential', image: '/images/house2.jpg'},
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="flex flex-wrap  justify-center space-x-4 mb-8">
          {['All', 'Commercial', 'Residential', 'Industrial', 'Public', 'Restoration'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 my-2 rounded-full ${
                filter === category ? 'bg-primary text-white' : 'bg-white text-gray-800'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

