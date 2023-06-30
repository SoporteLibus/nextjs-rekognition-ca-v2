import style from '../style/modelpopup.module.css'

interface InputSelectProps {
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    value: string | number | readonly string[] | undefined;
}

const InputSelect: React.FC<InputSelectProps> = ({ onChange, value}) => {
    return (
        <div className={style.inputbox}>
            <select value={value}
                onChange={onChange}>
                <option value="">Tipo de licencia</option>
                <option value="diurna enfermedad">Diurna enfermedad</option>
                <option value="nocturna enfermedad">Nocturna enfermedad</option>
                <option value="licencia gremial">Licencia gremial</option>
                <option value="diurna feriado ley">Diurna feriado ley</option>
                <option value="nocturna feriado ley">Nocturna feriado ley</option>
                <option value="accidente">Accidente</option>
                <option value="vacaciones">Vacaciones</option>
                <option value="licencia maternidad">Licencia maternidad</option>
                <option value="licencia mudanza">Licencia mudanza</option>
                <option value="licencia nacimiento">Licencia nacimiento</option>
                <option value="ausente con aviso">Ausente con aviso</option>
                <option value="ausente sin aviso">Ausente sin aviso</option>
                <option value="licencia examen">Licencia examen</option>
                <option value="suspension">Suspension</option>
                <option value="licencia fallecimiento">Licencia fallecimiento</option>
                <option value="licencia matrimonio">Licencia matrimonio</option>
                <option value="licencia donacion sangre">Licencia donacion sangre</option>
                <option value="ausencia enfermadad injustificada">Ausencia enfermadad injustificada</option>
                <option value="diurna reserva legal puesto">Diurna reserva legal puesto</option>
                <option value="nocturna reserva legal puesto">Nocturna reserva legal puesto</option>
                <option value="licencia aislamiento">Licencia aislamiento</option>
                <option value="licencia vacunación">Licencia vacunación</option>
            </select>
        </div>
    )
}

export default InputSelect