import { Auth } from './components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IA Recursos Humanos',
  description: 'Reconocimiento facial de empleados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Auth>{children}</Auth>
      </body>
    </html>
  )
}
