'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formState)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <motion.img
              src="/images/contact.jpg"
              alt="Construction site"
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

