'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: 'https://avatar.iran.liara.run/public/12',
    quote: 'BuildMaster transformed our vision into reality. Their attention to detail and commitment to quality is unparalleled.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Developer',
    image: 'https://avatar.iran.liara.run/public/11',
    quote: 'Working with BuildMaster was a breeze. They delivered our project on time and within budget. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Architect',
    image: 'https://avatar.iran.liara.run/public/10',
    quote: 'As an architect I appreciate BuildMasters innovative approach and their ability to bring complex designs to life.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  width={100}
                  height={100}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-lg mb-6">{testimonials[currentIndex].quote}</p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

