
import { Div } from "../../components/login/loginStyle"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FiAlertCircle } from 'react-icons/fi'
import { AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useState } from "react"
import { AuthContext } from "../../contexts/AutoContexxt"
import { useContext } from "react"

const schema = yup.object({
    email: yup.string().required('Insira seu Email'),
    password: yup.string().required('Insira sua senha')
})

export const Login = () => {
    const [typePassword, setTypePassword] = useState ('password')

    const [ eye, setEye ] = useState(false)
    
    const eyes = () => {
        setEye(!eye)
        eye ? (setTypePassword('password')) : (setTypePassword('text'))
    }

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const {loginUser} = useContext(AuthContext)

    return (

        <Div>
      
            <h1> Kenzie Hub</h1>
            <form onSubmit={handleSubmit(loginUser)} >
                <h2> Login </h2>

                <section className="login">
                    <div className="DivInput">
                        <label htmlFor="email"> Email</label>
                        <input id="email" type="email"
                        {...register ('email')} />
                        {errors.email ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.email?.message}</p>
                    </div>
                    <div className="DivInput">
                        <label htmlFor="password"> Password</label>
                        <input id="password" type={typePassword}
                        {...register ('password')} />
                        {eye ? ( <AiFillEyeInvisible onClick={eyes} className="eye"/> ) : ( <AiFillEye onClick={eyes} className="eye"/> )}
                    </div>
                    <button type="submit"> Entrar</button>
                </section>
                <section className="register">
                    <span> Ainda não possui uma conta </span>
                    <Link to={'/register'}> Cadastre-se </Link>
                </section>

            </form>
        </Div>
    )
}