import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemecontextProvider } from '@/components/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemecontextProvider>
          <AuthProvider>
          <ThemeProvider>
        <div className="container">
        <div className="wrapper">
        <Navbar/>
          {children}
        <Footer/>
        </div>
        </div>
        </ThemeProvider>
        </AuthProvider>
        </ThemecontextProvider>
      </body>
    </html>
  )
}
