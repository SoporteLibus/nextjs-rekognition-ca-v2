"use client"
import { ListObjects, Tr } from "@/app/types"
import React from "react"
import style from '@/styles/list.module.css'

const TR: React.FC<Tr> = ({ name, lastname, docket, status }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>
                {status == "On time" ? <span className={style.statusdelivered}>A horario</span> :
                status == "Out of time" ? <span className={style.statuspending}>Tarde</span> :
                <span className={style.statusreturn}>Error</span>}
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({title, titlelist, items}) => {
  return (
    <div className={style.details}>
        <div className={style.recentOrders}>
            <div className={style.cardHeader}>
                  <h2>{title}</h2>
                <a href="#" className={style.btn}>PDF</a>
            </div>

            <table>
                <thead>
                    <tr>
                        {titlelist.map((item) => 
                            <td>{item}</td>
                        )}
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
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default List