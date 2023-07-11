import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['300'] })

export const metadata = {
  title: 'Lookbook',
  description: 'Guest lookbook for Tyson and Dave\'s wedding',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
