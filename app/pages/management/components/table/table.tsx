"use client"

import React from "react"
import style from "./styles/table.module.css"
import ChartTsx from "../chart/chart"

export interface Tr {
    name: string
    docket: string
    lastname: string
    total_horas:string,
    horas_diurnas:string,
    horas_nocturnas:string,
    data:any
}

export interface ListObjects {
    title: string
    titlelist: string[]
    items: { 
        name: string, 
        docket: string, 
        lastname: string,
        total_horas:string,
        horas_diurnas:string,
        horas_nocturnas:string,
     }[],
     data:any
    
}


const TR: React.FC<Tr> = ({ name, lastname, docket, total_horas,horas_diurnas,horas_nocturnas,data}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{total_horas}</td>
            <td>{horas_diurnas}</td>
            <td>{horas_nocturnas}</td>
            <td><ChartTsx info={data}/></td>
        </tr>
    )
}

const List: React.FC<ListObjects>= ({title, titlelist, items,data}) => {
    return (
      <div className={style.details}>
          <div className={style.recentOrders}>
              <div className={style.cardHeader}>
                    <h2>{title}</h2>
                    
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
                              total_horas={item.total_horas}
                              horas_diurnas={item.horas_diurnas}
                              horas_nocturnas={item.horas_nocturnas}
                              data={data[index]}
                          />
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
  export default List