import { ModalStyled } from "./modalStyled"
import { Link } from "react-router-dom"
import { Api } from "../../Api/axios"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastContainer } from "react-toastify"

interface INewTech {
    title: string;
    status: string;
}


const schema = yup.object({
    title: yup.string().required('* Nome é obrigatório'),
    status: yup.string().required('* Status é obrigatório'),
})

export const TechnologyModal = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm<INewTech>({
        resolver: yupResolver(schema)
    })

    const { update, notify_success, notify_error } = useContext(AuthContext)   

    const  registerTechnology  = async (data: INewTech) => {
        try {
           await Api.post('/users/techs', data);
                
            update()
            notify_success('Tecnologia criada com sucesso')
            navigate('/dashboard')
            
        } catch (error) {
            console.log(notify_error('error'))
        }

    }

    return (
        <ModalStyled>
            <ToastContainer />
            <section className="container">
                <div className="title">
                    <h3> Cadastrar Tecnologia </h3>
                    <Link className="exit" to={'/dashboard'}>X</Link>
                </div>
                <form onSubmit={handleSubmit(registerTechnology)}>
                    <div>
                    <label htmlFor="name">Nome <span className="error">{errors.title?.message}</span></label>
                    <input id="name" type="text" placeholder="Nome"
                    {...register('title')}/>
                    </div>
                    <div>
                        <label htmlFor="nivel">Selecionar Status <span className="error">{errors.status?.message}</span></label>
                        <select id="nivel"
                        {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </section>
        </ModalStyled>
    )
}