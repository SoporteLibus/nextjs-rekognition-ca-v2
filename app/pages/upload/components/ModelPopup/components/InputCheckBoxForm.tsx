import style from '../style/modelpopup.module.css'

interface InputCheckBoxProps {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    responseTrue: string;
    ResponseFalse: string;
}

const InputCheckBoxForm: React.FC<InputCheckBoxProps> = ({checked, onChange, responseTrue, ResponseFalse}) => {
    return (
        <div className={style.inputbox}>
            <div className={style.checkboxwrapper}>
                <input type="checkbox" 
                    checked={checked}
                    onChange={onChange}
                />
            </div>
            {checked ? <p>{responseTrue}</p> : <p>{ResponseFalse}</p>}
        </div>
    )
}

export default InputCheckBoxForm