import { createContext, useContext, useState, } from "react";
import { Api } from "../Api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface IContextProps {
children: React.ReactNode;
}

interface IUserLogin {
    email: string;
    password: string;
}

interface IUserRegister {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}

interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string
    bio: string
    contact: string
    techs: [],
    works: [],
    created_at: string
    updated_at: string
    avatar_url: string | null
}

interface IUserContext {
    loginUser(data: IUserLogin): void;
    user: IUser[]
    setUser: React.Dispatch<React.SetStateAction<IUser[]>>;
    registerUser(data: IUserRegister): void;
    
}
export const UserContext = createContext<IUserContext>({} as IUserContext )

export const UserProvider = ({children}: IContextProps) => {

  const [user, setUser] = useState<IUser[]>([])

  const navigate = useNavigate()

  const { notify_success, notify_error, update } = useContext(AuthContext)   

  const loginUser = (data: IUserLogin): void => {
    Api.post("/sessions", data)
      .then((resp) => {
        localStorage.setItem("userToken", resp.data.token);
        Api.defaults.headers.authorization = `Bearer ${resp.data.token}`;
        setUser(resp.data.user);
        navigate(`/dashboard`, { replace: true });
        update()      
      })
      .catch((err) => notify_error('Error'));
    };
    


  const registerUser = (data: IUserRegister): void => {
    
    Api.post('/users', data)
      .then(function (response) {
        notify_success('Conta criada com sucesso')
    
        setTimeout(() => {
            navigate ('/')
        }, 5000);
      })
      .catch(function (error) {
        notify_error('Error')
      });
      }
      

    return (
    <UserContext.Provider value={{loginUser, registerUser, user, setUser}}>
        {children}
    </UserContext.Provider>
    )
}