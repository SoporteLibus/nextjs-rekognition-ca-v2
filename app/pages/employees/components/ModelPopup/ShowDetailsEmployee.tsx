import React, { SetStateAction } from 'react'
import style from '../../styles/modelpopup.module.css'
import LeftNav from '../LeftNav/LeftNav';

interface Dochet {
    docket: string
    setModal: React.Dispatch<SetStateAction<boolean>>
}

const ShowDetailEmployee: React.FC<Dochet> = ({ docket, setModal }) => {
    return (
        <div className={style.modalContainer}>
            <form>
                <div className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2>Detalle de Empleado</h2>
                    </div>
                    <LeftNav employeeDocket={docket} />
                    <div className={style.modalFooter}>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => setModal(false)}
                        >Cerrar</button>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => setModal(false)}
                        >Editar</button>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => setModal(false)}
                        >Detalles</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ShowDetailEmployee