"use client";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineHome} from 'react-icons/ai'
import { MdOutlineGroups } from 'react-icons/md'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'
import Login from "../login/Login";
import SideBar from "../sidebar/SideBar";
import { getCookie } from "cookies-next";
import Loading from "./loading";
import {AiOutlineClockCircle} from "react-icons/ai"
import {SlSettings} from "react-icons/sl"
import {TbReportAnalytics} from "react-icons/tb"
import { ContextProvider } from "@/app/utils";

const routes = [
  { icon: <AiOutlineHome size={25} />, text: 'Inicio', link: "/" },
  { icon: <MdOutlineGroups size={25} />, text: 'Empleados', link: "pages/employees" },
  { icon: <AiOutlineClockCircle size={25} />, text: 'Reloj', link: "pages/management"},
  { icon:<TbReportAnalytics size={25}/>, text:'Reportes',link:"pages/report"},
  { icon: <SlSettings size={25}/> ,text:'Configuracion', link:"pages/config"},
  { icon: <IoExitOutline size={25} />, text: 'Salir', link: "/" },
];

interface Auth {
    children: React.ReactNode
}

const AuthLogin: FC<Auth> = ({children}) => {
    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getCookie("user") ? (
            setAuth(true),
            setLoading(false)
        ) : (
            setAuth(false),
            setLoading(false)
        )
    }, [auth])

    if (loading && !auth) {
        return <>
            <Loading />
        </>
    } else if (auth) {
        return (
            <ContextProvider>
                <SideBar items={routes} setAuth={setAuth} >
                    {children}
                </SideBar>
            </ContextProvider>
        )
    } else {
        return (
            <Login setAuth={setAuth} />
        )
    }
}

export default AuthLogin