"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHome} from 'react-icons/ai'
import { MdOutlineGroups } from 'react-icons/md'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'
import Login from "../login/Login";
import SideBar from "../sidebar/SideBar";
import { useRouter } from 'next/navigation';

export const Home= () => {
  const { push } = useRouter();

  useEffect(() => {
     push('/hello-nextjs');
  }, []);
  return <p></p>;
};


const routes = [
  { icon: <AiOutlineHome size={25} />, text: 'Inicio', link: "/" },
  { icon: <MdOutlineGroups size={25} />, text: 'Empleados', link: "pages/employees" },
  { icon: <IoMdHelpCircleOutline size={30} />, text: 'Ayuda', link: "help" },
  { icon: <IoExitOutline size={25} />, text: 'Salir', link: "/" }
];

interface Auth {
    children: React.ReactNode
}

const AuthLogin: React.FC<Auth> = ({children}) => {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        localStorage.getItem("user") ? setAuth(true) : setAuth(false)
    }, [auth])
    return (
        auth ?
            <SideBar items={routes} setAuth={setAuth} >
                {children}
            </SideBar>
            :
            <Login setAuth={setAuth} />
    )
}

export default AuthLogin