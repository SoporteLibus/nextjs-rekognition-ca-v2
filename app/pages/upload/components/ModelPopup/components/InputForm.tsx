import style from '../style/modelpopup.module.css'

interface InputFormProps {
    title: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[] | undefined;
    defaultValue?: string;
    type: React.HTMLInputTypeAttribute;
    required: boolean;
}

const InputForm: React.FC<InputFormProps> = ({title, onChange, value, type, required, defaultValue}) => {
    return (
        <div className={style.inputbox}>
            <input type={type}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                required={required}
            />
            <span>{title}</span>
            <i></i>
        </div>
    )
}

export default InputForm