'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-full bg-white z-50 md:hidden"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
    >
      <div className="p-4 flex justify-end">
        <button onClick={onClose} className="text-primary">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-2xl font-semibold hover:text-primary transition-colors" onClick={onClose}>
              Home
            </Link>
          </li>
      
          <li>
            <Link href="/services" className="text-2xl font-semibold hover:text-primary transition-colors" onClick={onClose}>
              Services
            </Link>
          </li>
        
        </ul>
      </nav>
    </motion.div>
  )
}

