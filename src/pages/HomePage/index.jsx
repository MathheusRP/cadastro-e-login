import { HomeStyled } from "./HomePageStyled"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Api } from "../../Api/request"
import { Link } from "react-router-dom"

export const HomePage = () => {

    const [user, setUser] = useState('')

    const { id } = useParams()
    // console.log(id)
    useEffect(() => {
    Api.get(`/users/${id}`)
    .then(resp => {
        setUser(resp.data)
    })
    }, [])

    return(
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
    )
}