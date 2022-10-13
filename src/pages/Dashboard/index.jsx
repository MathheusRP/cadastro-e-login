import { HomeStyled } from "../../components/homePage/HomePageStyled"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Api } from "../../Api/axios"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { AuthContext } from "../../contexts/AutoContexxt"

export const HomePage = () => {
    
    const {usuario, loading} = useContext(AuthContext)

    const [user, setUser] = useState('')

    const { id } = useParams()

    useEffect(() => {
    Api.get(`/users/${id}`)
    .then(resp => {
        setUser(resp.data)
        
    })
    }, [])

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
            
            <Link to={'/'} className="exit"> Sair </Link>
            </div>

           </header>

          {user ? (
            <div>
            <section className="info">
                <div>
                    <h2>Olá, {user.name}</h2>
                    <span>{user.course_module}</span>
                </div>
            </section>
            <section className="mensagem">
                    <div>
                        <h2> Que pena! Estamos em desenvolvimento :( </h2>
                        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </section>
          </div>  
          ) : (
            <h1>Loading</h1>
          )} 
            
        </HomeStyled>
        ) : (
            <Navigate to='/'/>
        )}
    </>  
    )
}