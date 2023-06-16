import style from '../../style/select.module.css'

interface SelectProp {
    value: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Select: React.FC<SelectProp> = ({value, onChange}) => {
    return (
        <div className={style.divselect}>
            <select className={style.select} value={value} onChange={onChange}>
                <option value="produccion">Produccion</option>
                <option value="tecnico">Tecnico</option>
                <option value="matriceria">Matriceria</option>
                <option value="mantenimiento">Mantenimiento</option>
                <option value="calidad">Calidad</option>
                <option value="deposito">Deposito</option>
            </select>
        </div>
    )
}

export default Select