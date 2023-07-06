import { SetStateAction, useState } from 'react'
import style from '../../style/uploads.module.css'
import { BiSearch } from "react-icons/bi";
import { axiosGet } from '@/app/services';

interface SearchProps {
    setEmployees: React.Dispatch<SetStateAction<never[]>>
}

const InputSearch: React.FC<SearchProps> = ({ setEmployees }) => {

    const [search, setSearch] = useState("")
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await axiosGet(`buscar?keyword=${search}`)
            setEmployees(res.data.data)
        }
        catch (err) {
            console.log("Error en la busqueda de empleados")
        }
    }

  return (
    <div className={style.employeeHeader}>
        <div className={style.searchBox}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Busqueda por nombre o legajo"
                      onChange={e => setSearch(e.target.value)}
                      required
                />
                <button style={{ border: "none", cursor: "pointer" }}
                type="submit">
                <BiSearch size={20} />
                </button>
            </form>
        </div>
    </div>
  )
}

export default InputSearch