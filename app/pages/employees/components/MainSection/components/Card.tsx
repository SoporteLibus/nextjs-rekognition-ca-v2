import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from '../../../styles/mainsection.module.css'
import ShowDetailEmployee from "../../ModelPopup/ShowDetailsEmployee";
import EditDetailsModal from "../../ModelPopup/EditDetailsModal";
import { Capitalize, alertDeleteEmployee } from "@/app/utils";

interface Card {
  empData : any
  handleReRender: any
}

const Card: React.FC<Card> = ({ empData, handleReRender }) => {
  const { nombre, apellido, legajo, email, foto, sexo } = empData
  const [dropDown, setDropdown] = useState(false)
  const [showModalEmp, setShowModalEmp] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleDelete = async () =>{
    try {
      alertDeleteEmployee(nombre,apellido,empData._id)
      handleReRender()
    }
    catch(err){
      console.log(err)
    }
    
  }
  return (
  <>
    {
      showModalEmp && <ShowDetailEmployee setModal={setShowModalEmp} docket={legajo} />
    }
    {
      editModal && <EditDetailsModal setModal={setEditModal} setEditModal={setEditModal} empById={empData} />
    }
    <div className={style.cardcomponent}>
      <div className={style.cardinner}>
        <div className={style.dropdownContainer}>
          <BsThreeDotsVertical size={30} onClick={() => setDropdown(!dropDown)} />
          {
            dropDown && <ul className={style.dropdown}
              onMouseLeave={() => setDropdown(false)}
            >
              <li onClick={()=>setEditModal(true)}>Editar</li>
              <li onClick={()=>handleDelete()}>Borrar</li>
            </ul>
          }
        </div>
        <div onClick={() => setShowModalEmp(true)}>
          <div className={style.profileImage}>
              <img src={foto ? foto : (sexo == "m") ? "/avatar-h.jpeg" : "/avatar-m.webp"}
                alt={nombre} />
          </div>
          <div className={style.empdetail}>
            <h3>{Capitalize(nombre)} {Capitalize(apellido)}</h3>
            <p>{email}</p>
          </div>    
        </div>
      </div>
      <div className={style.jobrole} onClick={() => setShowModalEmp(true)}>
        <p>{legajo}</p>
      </div>
    </div>
    </>
  );
};

export default Card;
