
import { TechnologyStyled } from "./technologyStyled"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaTrashAlt } from 'react-icons/fa'
import { Api } from "../../Api/axios"

export const TechnologyList = () => {

    const navigate = useNavigate()

    const { usuario, verification, setTech } = useContext(AuthContext)
    // console.log( usuario.techs)

    const techsDelete = async (id) => {
        try {
            // Api.defaults.headers.authorization = `Bearer ${usertoken}`; 
           await Api.delete(`/users/techs/${id}`) 
            
           verification()
           
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const openTech = (event, data) => {
        if(event.target.tagName === 'LI'){
            navigate('/dashboard/tech')
            setTech(data)
        }
        
    }

    return (

        <TechnologyStyled>
            <div className="technologyDiv">
                <h2> Tecnologias</h2>
                <Link to={'new'} className="modal"> + </Link>
            </div>
            <ul>

                {
                    usuario.techs.length > 0 ? (
                        usuario.techs.map(techs => {
                            return (
                                <li onClick={(event) => openTech(event,techs)} key={techs.id}  >
                                    <h3>{techs.title}</h3>
                                    <div>
                                        <span >{techs.status}</span>
                                        <button onClick={() => techsDelete(techs.id)} id={techs.id}>
                                            <FaTrashAlt className="delete" />
    
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    ) : (

                        <h2>Lista vazia</h2>
                    )
                } 
            </ul>
            <Outlet/>
        </TechnologyStyled>

    )
} 