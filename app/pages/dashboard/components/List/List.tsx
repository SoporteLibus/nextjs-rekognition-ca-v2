"use client"
import { ListObjects, Tr } from "@/app/types"
import React from "react"
import style from '../../style/list.module.css'
import ProfileList from "../profile-list/ProfileList"

const TR: React.FC<Tr> = ({ name, lastname, docket, status }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>
                {status ? <span className={style.statusdelivered}>Puntual</span> :
                !status ? <span className={style.statuspending}>Tarde</span> :
                <span className={style.statusreturn}>Error</span>}
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({title, title2, titlelist, items, items2}) => {
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
                        />
                    ))}
                </tbody>
            </table>
        </div>
        <ProfileList title={title2} body={items2} />
    </div>
  )
}
export default List