import React, { useEffect, useState } from "react";
import style from '../../styles/mainsection.module.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosGet } from "@/app/services";

const MainSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [employees, setEmployees] = useState<any>([])
  const [reRender, setReRender] = useState(false)

  const getAllEmployee = async () => {
    try {
      const res = await axiosGet('listar/')
      setEmployees(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await axiosGet(`buscar?keyword=${e.target?.value}`)
      setEmployees(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleReRender = () => {
    setReRender(true)
  }

  useEffect(() => {
    getAllEmployee()
  }, [showModal, reRender])

  return (
    <>
      {
        showModal && <ModelPopup setShowModal={setShowModal} />
      }
      <div className={style.mainContainer}>
        <div className={style.mainWrapper}>
          <h1>
            Empleados <span className={style.empcount}>{employees.length}</span>
          </h1>
          <div className={style.employeeHeader}>
            <div className={style.searchBox}>
              <input
                type="text"
                placeholder="Busqueda por legajo"
                onChange={handleSearch}
              />
              <BiSearch size={20} />
            </div>
            <button className={style.addbtn}
              onClick={() => setShowModal(true)}
            ><IoMdAdd size="20" color="#fffff" />Agregar</button>
          </div>
          <div className={style.employees}>
            {
              employees && employees.map((emp: any) => {
                return <div key={emp._id}>
                  <Card
                    empData={emp}
                    handleReRender={handleReRender} />
                </div>
              })
            }
          </div>
          {employees.length == 0 && <center>Sin datos de Empleados</center>}
        </div>
      </div>
    </>
  );
};

export default MainSection;
