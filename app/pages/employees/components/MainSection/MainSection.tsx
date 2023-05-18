import React, { useEffect, useState } from "react";
import style from '../../styles/mainsection.module.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosGet } from "@/app/services";
import Loading from "./components/loading";

const MainSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [employees, setEmployees] = useState<any>([])
  const [reRender, setReRender] = useState(false)
  const [loading, setLoading] = useState(true)

  const getAllEmployee = async () => {
    try {
      const res = await axiosGet('listar/')
      setEmployees(res.data)
      console.log("AllEmployees>>",employees)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const res = await axiosGet(`buscar?keyword=${e.target?.value}`)
      if (res.data.data) {
        setEmployees(res.data.data)
        console.log(res.data.data)
      } else {
        getAllEmployee()
      }
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
    setTimeout(() => {
      setLoading(false)
    }, 5000);
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
                placeholder="Busqueda por nombre o legajo"
                onChange={handleSearch}
              />
              <BiSearch size={20} />
            </div>
            <button className={style.addbtn}
              onClick={() => setShowModal(true)}>
                <IoMdAdd size="20" color="#fffff" />Agregar
            </button>
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
          {(employees.length == 0 && loading) ?
            <Loading />
              : 
            (employees.length > 0 && loading) ?
            <div></div>
              :
            <center>Sin datos de empleados...</center>
          }
        </div>
      </div>
    </>
  );
};

export default MainSection;