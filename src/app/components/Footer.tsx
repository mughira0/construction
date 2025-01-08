import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BuildMaster</h3>
            <p className="mb-4">Building dreams, crafting reality. Your trusted partner in construction excellence.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#residential" className="hover:text-primary transition-colors">Residential Construction</Link></li>
              <li><Link href="/services#commercial" className="hover:text-primary transition-colors">Commercial Construction</Link></li>
              <li><Link href="/services#renovation" className="hover:text-primary transition-colors">Renovation</Link></li>
              <li><Link href="/services#consulting" className="hover:text-primary transition-colors">Construction Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="mb-2">123 Construction Ave, Building City, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@buildmaster.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BuildMaster Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

