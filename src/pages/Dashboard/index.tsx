import { HomeStyled } from "../../components/homePage/HomePageStyled"
import { Navigate} from "react-router-dom"

import { useNavigate } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { TechnologyList } from "../../components/technologyList";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {

    const navigate = useNavigate()

    const {checkUser, loading, setUser} = useContext(AuthContext)
    const {user} = useContext(UserContext)


    const logOff = () => {
        localStorage.setItem('userToken', '')
        setUser(null)
        navigate('/')
    }
    
    if(loading){
        return null;
    }
    
    return( 
        <>     
        {checkUser ? (
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
                        <h2>Olá, {checkUser.name}</h2>
                        <span>{checkUser.course_module}</span>
                    </div>
                </section>

                <TechnologyList user={checkUser}/>

            </div>  
            
        </HomeStyled>
        ) : (
            <Navigate to='/'/>
        )}
    </>  
    )
}