import React, { useContext, useEffect, useState } from "react";
import style from '../../styles/mainsection.module.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosGet } from "@/app/services";
import Loading from "./components/loading";
import { Context } from '@/app/utils/context/ContextProvider';

const MainSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [employees, setEmployees] = useState([])
  const All = employees.length
  const [reRender, setReRender] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const { setTitle }: any = useContext(Context)

  const getAllEmployee = async () => {
    try {
      const res = await axiosGet('listar/')
      setEmployees(res.data.data)
    }
    catch (err) {
      console.log("No se pudieron obtener los empleados")
    }
  }

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (search) {
        const res = await axiosGet(`buscar?keyword=${search}`)
        setEmployees(res.data.data)
      } else {
        getAllEmployee()
      }
    }
    catch (err) {
      console.log("Error en la busqueda de empleados")
    }
  }

  const handleReRender = () => {
    setReRender(true)
  }

  useEffect(() => {
    getAllEmployee()
    setTitle("Empleados")
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
            Encontrados: <span className={style.empcount}>{All}</span>
          </h1>
          <div className={style.employeeHeader}>
            <div className={style.searchBox}>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Busqueda por nombre o legajo"
                  onChange={e => setSearch(e.target.value)}
                />
                <button style={{ border: "none", cursor: "pointer" }}
                  type="submit">
                  <BiSearch size={20} />
                </button>
              </form>
            </div>
            <button className={style.addbtn}
              onClick={() => setShowModal(true)}>
                <IoMdAdd size="20" color="#fffff" />
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
            (employees.length > 0 && !loading) ?
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
