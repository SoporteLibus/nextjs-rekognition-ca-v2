"use client"
import { ListObjects, Tr } from "@/app/types"
import React from "react"
import style from '../../style/list.module.css'

const TR: React.FC<Tr> = ({ name, lastname, docket, hours, status }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{hours}</td>
            <td>
                {status ? <span className={style.statusdelivered}>Puntual</span> :
                !status ? <span className={style.statuspending}>Tarde</span> :
                <span className={style.statusreturn}>Error</span>}
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({title, titlelist, items}) => {
  return (
    <div className={style.recentOrders}>
        <div className={style.cardHeader}>
                <h2>{title}</h2>
            <a href="#" className={style.btn}>PDF</a>
        </div>

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
                        status={item.status}
                        hours={item.hours}
                    />
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default List