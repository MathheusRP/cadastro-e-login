
import { Div } from "./loginStyle"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

import { FiAlertCircle } from 'react-icons/fi'

import { Api } from "../../Api/request"

import { ToastContainer, toast } from 'react-toastify';


const schema = yup.object({
    email: yup.string().required('Insira seu Email'),
    password: yup.string().required('Insira sua senha')
})

export const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });


    const loginUser = (data) => {
        console.log(data)

        Api.post('/sessions', {
            email: data.email,
            password: data.password
        })
        .then(resp => {
            console.log(resp)
            localStorage.setItem('userToken', resp.data.token)
            localStorage.setItem('userId', resp.data.user.id)
            notify_success()

            setTimeout(() => {
                navigate(`/home/${resp.data.user.id}`)
            }, 4000);
        })
        .catch(err => notify_error())
        
    }

    const notify_success = (alert) => toast.success("Login realizado !", {
        position: toast.POSITION.TOP_CENTER
    });

      const notify_error = (alert) => toast.error("Falha ao fazer login !", {
        position: toast.POSITION.TOP_CENTER
      });

    return (

        
        
        <Div>


        
        <ToastContainer />
      

            <h1> Kenzie Hub</h1>
            <form onSubmit={handleSubmit(loginUser)}>
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
                        <input id="password" type="password"
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