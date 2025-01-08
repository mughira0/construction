'use client'

import { motion, useAnimation } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 50) {
        setIsScrolled(true)
        controls.start({ height: 60 })
      } else {
        setIsScrolled(false)
        controls.start({ height: 80 })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

 

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ height: 80 }}
      animate={controls}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          BuildMaster
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.header>
  )
}

