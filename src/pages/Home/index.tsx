
import { Div } from "../../components/login/loginStyle"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FiAlertCircle } from 'react-icons/fi'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { AuthContext } from "../../contexts/AuthContext"

const schema = yup.object({
    email: yup.string().required('Insira seu Email'),
    password: yup.string().required('Insira sua senha')
})

interface IUserLogin {
    email: string;
    password: string;
}

export const Login = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}} = useForm<IUserLogin>({
        resolver: yupResolver(schema),
    });

    const {checkUser} = useContext(AuthContext)
    const {loginUser} = useContext(UserContext)

    checkUser ? (navigate('/dashboard')) : (<></>)

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
                        <input id="password" type='password'
                        {...register ('password')} />
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