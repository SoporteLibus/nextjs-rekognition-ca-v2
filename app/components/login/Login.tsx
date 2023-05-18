"use client"
import style from './style/login.module.css'
import { SetStateAction, useState } from 'react'
import { axiosLogin } from '@/app/services'
import Swal from 'sweetalert2'
import { setCookie } from 'cookies-next'

interface LoginProp {
	setAuth?: React.Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProp> = ({ setAuth }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const Submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const res = await axiosLogin(`login/`, {
				email: email, password: password
			})
			if (res.data.user.activo) {
				setCookie("token", res.data.token);
				setCookie("user", JSON.stringify(res.data.user));
				setAuth && setAuth(true)
			}
			
		} catch (error) {
			Swal.fire(
				'Oops...!',
				'Error de autenticacion!',
				'error'
			)
		}
	}
  	return (
	<div className={style.session}>
		<div className={style.sessionbox}>
			<div className={style.left}>
				<svg enableBackground="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xmlns="http://www.w3.org/2000/svg">
					<path className="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"/>
				</svg>      
			</div>
			<form className={style.form} onSubmit={Submit} action="" autoComplete="off"> 
				<h4>Iniciar Sesion</h4>
				<p>Bienvenido:</p>
				<div className={style.floatinglabel}>
					<label htmlFor="email">Email:</label>
					<input placeholder="Ingresar"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required />
				</div>
				<div className={style.floatinglabel}>
					<label htmlFor="password">Contraseña:</label>
					<input placeholder="Ingresar"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required />
				</div>
				<button className={style.button} type="submit">Entrar</button>
			</form>
		</div>
	</div>
  )
}
export default Login