"use client"
import { ListObjects, Tr } from "../../types/list.types"
import React from "react"
import style from '../../style/list.module.css'

// { nombre: "Angel david", lastname: "Coceres", docket: "892", entrance: "00:00", exit: "00:00", button: "892" }

const TR: React.FC<Tr> = ({ name, lastname, docket, entrance, exit, setEmployee }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{entrance}</td>
            <td>{exit}</td>
            <td>
                <button className={style.button} onClick={() => setEmployee(docket)} >{docket}</button>
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({title, titlelist, items, setEmployee}) => {
  return (
      <div className={style.recentOrders}>
        <div className={style.cardHeader}>
            <h2>{title}</h2>
            <a href="#" className={style.btn}>PDF</a>
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
                            entrance={item.entrance}
                            exit={item.exit}
                            setEmployee={setEmployee}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default List