"use client"
import { useState } from "react"
import LeftNav from "./components/LeftNav/LeftNav"
import MainSection from "./components/MainSection/MainSection"
import TopNav from "./components/TopNav/TopNav"


const Employees = () => {
  const [employeeId, setEmployeeId] = useState('123456')
  return (
    <MainSection setEmployeeId={setEmployeeId} />
  )
}
export default Employees