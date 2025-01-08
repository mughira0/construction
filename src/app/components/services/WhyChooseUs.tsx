'use client'

import { motion } from 'framer-motion'
import { Award, Users, ThumbsUp } from 'lucide-react'

const reasons = [
  { icon: Award, title: 'Years of Experience', value: 25, suffix: '+' },
  { icon: Users, title: 'Completed Projects', value: 500, suffix: '+' },
  { icon: ThumbsUp, title: 'Client Satisfaction', value: 98, suffix: '%' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="inline-block p-4 bg-white rounded-full text-primary mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <reason.icon size={40} />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {reason.title}
              </motion.h3>
              <motion.p
                className="text-4xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                {reason.value}{reason.suffix}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

