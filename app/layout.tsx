import { SideBar } from './components'
import './globals.css'
import { Inter } from 'next/font/google'
import { AiOutlineHome, AiOutlineLock } from 'react-icons/ai'
import { MdOutlineGroups } from 'react-icons/md'
import { FiMessageCircle, FiSettings } from 'react-icons/fi'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

const routes = [
  { icon: <AiOutlineHome size={25} />, text: 'Dashboard', link: "/" },
  { icon: <MdOutlineGroups size={25} />, text: 'Customers', link: "customers" },
  { icon: <FiMessageCircle size={25} />, text: 'Messages', link: "messages" },
  { icon: <IoMdHelpCircleOutline size={30} />, text: 'Help', link: "help" },
  { icon: <FiSettings size={25} />, text: 'Settings', link: "settings" },
  { icon: <AiOutlineLock size={25} />, text: 'Password', link: "password" },
  { icon: <IoExitOutline size={25} />, text: 'Sign Out', link: "logout" }
];

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
        <SideBar items={routes}>
          {children}
        </SideBar>
      </body>
    </html>
  )
}
