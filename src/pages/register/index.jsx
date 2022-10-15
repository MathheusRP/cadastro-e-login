import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Div } from "../../components/register/registerStyle"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FiAlertCircle } from 'react-icons/fi'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Deve ser um email valido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória').min(8, 'No minimo 8 caracteres'),
    confirm_password: yup.string().oneOf([yup.ref ('password')], 'A confirmação de senha dever ser igual a senha') ,
    bio: yup.string().required('Bio é obrigatória '),
    contact: yup.string().required('Contato é obrigatório'),
    course_module: yup.string().required('modulo é obrigatório')
})

export const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return (  
        <Div>
            <div className="back">
                <h1> Kenzie Hub</h1>
                <Link to={'/'}> Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(registerUser)} >
                <h2> Register </h2>

                <section className="login">
                    <div className="DivInput">
                        <label htmlFor="name" title="Teste"> Digite aqui seu nome </label>
                        <input  id="name" type="text" 
                        {...register('name')}  />
                        {errors.name ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.name?.message}</p>
                    </div>
                    
                    <div className="DivInput">
                        <label htmlFor="email"> Digite aqui seu email</label>
                        <input id="email" type="email" 
                        {...register('email')} />
                        {errors.email ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.email?.message}</p>
                    </div>
                    <div className="DivInput">
                        <label htmlFor="password"> Digite aqui sua senha </label>
                        <input id='password' type='password'
                        {...register('password')} />
                        {errors.password ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.password?.message}</p>
                    </div>
                    <div className="DivInput">
                        <label htmlFor="confirm_password"> Digite novamente sua senha </label>
                        <input id="confirm_password" type="password"
                         {...register('confirm_password')} />
                         {errors.confirm_password ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                         <p >{errors.confirm_password?.message}</p>
                    </div>
                    <div className="DivInput">
                        <label htmlFor="bio"> Bio </label>
                        <input id="bio" type="text" 
                        {...register('bio')} />
                        {errors.bio ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.bio?.message}</p>
                    </div>
                    <div className="DivInput">
                        <label htmlFor="contact"> Contato </label>
                        <input id="contact" type="text" 
                        {...register('contact')} />
                        {errors.contact ? ( <FiAlertCircle className="alert"/> ) : ( <></>) }
                        <p >{errors.contact?.message}</p>
                    </div>
                    <div className="DivInput">
                        <select name="" id="" 
                        {...register('course_module')} > 
                            <option value='' > Selecione um módulo </option>
                            <option value='Primeiro módulo (Introdução ao Frontend'> Primeiro módulo (Introdução ao Frontend) </option>
                            <option value='Segundo módulo (Frontend Avançado)' > Segundo módulo (Frontend Avançado) </option>
                            <option value='Terceiro módulo (Introdução ao Backend)'> Terceiro módulo (Introdução ao Backend) </option>
                            <option value='Quarto módulo (Backend Avançado)'> Quarto módulo (Backend Avançado) </option>
                        </select>
                    </div>
                    <button type="submit"> Cadastrar </button>
                    
                </section>    
            </form>
        </Div>
    )
}