import style from '../../ModelPopup/style/modelpopup.module.css'

interface InputFormProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[] | undefined;
    defaultValue?: string;
    type: React.HTMLInputTypeAttribute;
    required: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onChange, value, type, required, defaultValue }) => {
    return (
        <div className={style.inputboxselect}>
            <input type={type}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                required={required}
            />
        </div>
    )
}

export default InputForm