import style from '../../ModelPopup/style/modelpopup.module.css'

interface InputSelectProps {
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    value: string | number | readonly string[] | undefined;
    children: React.ReactNode
    required: boolean
}

const InputSelect: React.FC<InputSelectProps> = ({ onChange, value, children, required }) => {
    return (
        <div className={style.inputboxselect}>
            <select value={value}
                onChange={onChange}
                required={required}>
                <option value="">Elegir</option>
                {children}
            </select>
        </div>
    )
}

export default InputSelect