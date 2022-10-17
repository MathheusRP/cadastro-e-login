import { HomeStyled } from "../../components/homePage/HomePageStyled"
import { Navigate} from "react-router-dom"

import { useNavigate } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { TechnologyList } from "../../components/technologyList";

export const Dashboard = () => {

    const navigate = useNavigate()

    const {usuario, loading, setUser} = useContext(AuthContext)


    const logOff = () => {
        localStorage.setItem('userToken', '')
        setUser('')
        navigate('/')
    }


    
    if(loading){
        return null;
    }

    return( 
        <>     
        {usuario ? (
            <HomeStyled>
                <header>
                        <div>
                            <h1>Kenzie Hub</h1>
                            {/* <button onClick></button> */}
                            <button onClick={logOff} className="exit"> Sair </button>
                            
                        </div>
                </header>

                <div>
                <section className="info">
                    <div>
                        <h2>Olá, {usuario.name}</h2>
                        <span>{usuario.course_module}</span>
                    </div>
                </section>

                <TechnologyList/>

            </div>  
            
        </HomeStyled>
        ) : (
            <Navigate to='/'/>
        )}
    </>  
    )
}