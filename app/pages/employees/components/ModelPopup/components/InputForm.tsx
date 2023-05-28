import style from '../../../styles/modelpopup.module.css'

interface InputFormProps {
    title: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[] | undefined;
    type: React.HTMLInputTypeAttribute;
    required: boolean;
}

const InputForm: React.FC<InputFormProps> = ({title, onChange, value, type, required}) => {
    return (
        <div className={style.inputbox}>
            <input type={type}
                onChange={onChange}
                value={value}
                required={required}
            />
            <span>{title}</span>
            <i></i>
        </div>
    )
}

export default InputForm