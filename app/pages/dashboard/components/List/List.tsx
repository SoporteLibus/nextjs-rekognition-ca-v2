"use client"
import { ListObjects, Tr } from "@/app/types"
import React from "react"
import style from '../../style/list.module.css'

const TR: React.FC<Tr> = ({ name, lastname, docket, entrance, exit, status }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{entrance}</td>
            <td>{exit}</td>
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
                    {items && items.map((item, index) => (
                        <TR
                            key={index}
                            name={item.name}
                            lastname={item.lastname}
                            docket={item.docket}
                            status={item.status}
                            entrance={item.entrance}
                            exit={item.exit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default List