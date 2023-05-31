import { Capitalize } from '@/app/utils'
import style from '../../style/list.module.css'
import Image from 'next/image'
import React from 'react'

interface Prof {
    name: string
    lastname: string
    image: string
    status: string
}

interface ProfList {
    title: string
    body: {name: string, lastname: string, image: string, status: string}[]
}

const Profile: React.FC<Prof> = ({name,lastname,image,status}) => {
    return (
        <div className={style.divBox}>
            <Image src={image} width={40} height={40} alt="Profile Image" />
            <h4>{lastname} <br />
                <span>{name}</span>
            </h4>
            {status == "present" ? <p className={style.present}>Presente</p> :
                <p className={style.ausent}>Ausente</p>}
        </div>
    )
}

const ProfileList: React.FC<ProfList> = ({title,body}) => {
  return (
    <div className={style.recentCustomers}>
        <div className={style.cardHeader}>
            <h2>{title}</h2>
        </div>

        {body.map((item, index) => (
            <Profile
                key={index}
                name={item.name}
                lastname={item.lastname}
                image={item.image}
                status={item.status}
            />
        ))}
    </div>
  )
}

export default ProfileList;