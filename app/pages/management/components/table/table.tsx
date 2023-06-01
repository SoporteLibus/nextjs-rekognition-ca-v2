"use client"

import React from "react"
import style from "./styles/table.module.css"
import ChartTsx from "../chart/chart"

export interface Tr {
    name: string
    docket: string
    lastname: string
    status: string
}

export interface ListObjects {
    title: string
    titlelist: string[]
    items: { name: string, docket: string, lastname: string, status: string }[];
    
}

const TR: React.FC<Tr> = ({ name, lastname, docket, status }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>
                <ChartTsx />
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
      </div>
    )
  }
  export default List