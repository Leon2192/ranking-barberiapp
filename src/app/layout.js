import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BarberiApp | Todas tus peluquerias, en un solo lugar',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  icons: { apple: '/icon.png' },
}

export const viewport = {
  themeColor: '#fff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="contenedorPrincipal bg-light">
          {children}
        </div>
      </body>
    </html>
  )
}
