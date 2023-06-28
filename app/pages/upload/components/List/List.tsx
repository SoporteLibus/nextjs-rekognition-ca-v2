"use client"
import { ListObjects, Tr } from "../../types/list.types"
import React from "react"
import style from '../../style/list.module.css'

const TR: React.FC<Tr> = ({ name, lastname, docket, setEmployee, setShowModalExtras,
    setShowModalNormal, setShowModalLicencia }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>
                <button className={style.button} onClick={() => {
                    setEmployee([name, lastname, docket]),
                    setShowModalExtras(true)
                }}>Extra</button>
                <button className={style.button} onClick={() => {
                    setEmployee([name, lastname, docket]),
                    setShowModalLicencia(true)
                }}>Licencia</button>
                <button className={style.button} onClick={() => {
                    setEmployee([name, lastname, docket]),
                    setShowModalNormal(true)
                }}>Normal</button>
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({
    title, titlelist, items, setEmployee, setShowModalExtras,
    setShowModalNormal, setShowModalLicencia
}) => {
  return (
      <div className={style.recentOrders}>
        <div className={style.cardHeader}>
            <h2>{title}</h2>
        </div>
          <div className={style.divMedium}>
            <table className={style.table}>
                <thead>
                    <tr>
                        {titlelist.map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <TR
                            key={index}
                            name={item.name}
                            lastname={item.lastname}
                            docket={item.docket}
                            setEmployee={setEmployee}
                            setShowModalExtras={item.setShowModalExtras}
                            setShowModalNormal={item.setShowModalNormal}
                            setShowModalLicencia={item.setShowModalLicencia}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default List