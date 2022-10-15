import { ModalStyled } from "./modalStyled"
import { Link } from "react-router-dom"
import { Api } from "../../Api/axios"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastContainer } from "react-toastify"


const schema = yup.object({
    status: yup.string().required('* Status é obrigatório'),
})

export const TechModal = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    
    const { verification, techAtual, notify_success, notify_error } = useContext(AuthContext)   

    const  newStatus  = async (data) => {

        try {
            await Api.put(`/users/techs/${techAtual.id}`, data) 
                
           verification()
           notify_success('Status alterado com sucesso' )
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
                <form onSubmit={handleSubmit(newStatus)}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input disabled value={techAtual.title} id="name" type="text" placeholder="Nome"/>
                    </div>
                    <div>
                        <label htmlFor="nivel">Selecionar Status <span className="error">{errors.status?.message}</span></label>
                        <select name="" id="nivel"
                        {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button  type="subimit">Cadastrar Tecnologia</button>
                </form>
            </section>
        </ModalStyled>
    )
}