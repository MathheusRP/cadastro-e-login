import { TechnologyStyled } from "./technologyStyled"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaTrashAlt } from 'react-icons/fa'
import { Api } from "../../Api/axios"

interface ITechs {
    filter(arg0: (techs: any) => void): unknown
    map(arg0: (techs: any) => JSX.Element): import("react").ReactNode
    id: string;
    title: string;
    status: string;
    created_at: string
    updated_at: string
}

interface IuserProps {
    user: {
    id: string 
    name: string 
    email: string 
    course_module: string 
    bio: string 
    contact: string 
    techs: ITechs 
    works: [] 
    created_at: string 
    updated_at: string 
    avatar_url: string 

    }
}

export const TechnologyList = ({user}: IuserProps) => {

    const navigate = useNavigate()
    
    const { checkUser, setTech, update } = useContext(AuthContext)

    const techsDelete = async (id: string) => {
        
        try {
            // Api.defaults.headers.authorization = `Bearer ${usertoken}`; 
            await Api.delete(`/users/techs/${id}`) 
            update()
        
        } catch (error) {
            console.log(error)
            
        }
    }

    const openTech = (event: any, data : ITechs) => {
        const target = event.target as HTMLInputElement
        if(target.tagName === 'LI'){
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
                    checkUser ? (
                        checkUser.techs?.map(techs => {
                            return (
                                <li onClick={(event) => openTech(event, techs)} key={techs.id}  >
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

