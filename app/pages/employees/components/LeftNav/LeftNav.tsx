"use client"
import React, { useEffect, useState } from 'react'
import style from '../../styles/leftnav.module.css'
import { axiosGet } from '@/app/services'
import { Capitalize } from '@/app/utils'

interface EmployeeId {
  employeeDocket: string
}

const LeftNav: React.FC<EmployeeId> = ({ employeeDocket }) => {
  const [empByDocket, setEmpByDocket] = useState<any>([])

  const getEmployeeById = async () => {
    try {
      const res = await axiosGet(`listar/legajo/${employeeDocket}`)
      setEmpByDocket(res.data.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getEmployeeById()
  }, [employeeDocket])

  return (
    <div className={style.employeeDetail}>
      <img src={empByDocket.foto ? empByDocket.foto :
        (empByDocket.sexo == "m" || empByDocket.sexo == "M") ?
          "/avatar-h.jpeg" : "/avatar-m.webp"}
      />
      <h1>{Capitalize(empByDocket.nombre)} {Capitalize(empByDocket.apellido)}</h1>
      <p>Email: {empByDocket.email}</p>
      <p>Direccion: {`${empByDocket.calle} N°${empByDocket.numero}`}</p>
      <p>Telefono: {empByDocket.telefono}</p>
      <p>Dni: {empByDocket.dni}</p>
      <p className={style.date}>Legajo: {empByDocket.legajo}</p>
    </div>
  )
}

export default LeftNav
