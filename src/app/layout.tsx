import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuildMaster Construction',
  description: 'Your trusted partner for high-quality construction projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

