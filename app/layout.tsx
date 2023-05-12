import { SideBar } from './components'
import './globals.css'
import { Inter } from 'next/font/google'
import { AiOutlineHome} from 'react-icons/ai'
import { MdOutlineGroups } from 'react-icons/md'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

const routes = [
  { icon: <AiOutlineHome size={25} />, text: 'Inicio', link: "/" },
  { icon: <MdOutlineGroups size={25} />, text: 'Empleados', link: "pages/employees" },
  { icon: <IoMdHelpCircleOutline size={30} />, text: 'Ayuda', link: "help" },
  { icon: <IoExitOutline size={25} />, text: 'Salir', link: "logout" }
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
