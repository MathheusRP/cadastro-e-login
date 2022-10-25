import { createContext, useEffect, useState } from "react";
import { Api } from "../Api/axios";
import { toast } from 'react-toastify';

export interface IAuthContext {
  checkUser: IUser | null;
  loading: boolean;
  notify_success: (message: string) => void;
  notify_error: (message: string) => void;
  techAtual: ITech | null
  setTech: React.Dispatch<React.SetStateAction<ITech | null>>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  update: () => void
}

interface ITech {
  created_at: string
  id: string;
  status: string;
  title: string;
  updated_at: string
}

interface IUser {
  name: string 
  id: string 
  email: string 
  course_module: string 
  bio: string 
  contact: string 
  techs: ITech[]
  works: [] 
  created_at: string 
  updated_at: string 
  avatar_url: string 
}

interface IContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children}: IContextProps) => {

  const [checkUser, setUser] = useState<IUser | null>( null)

  const [ loading, setLoading ] = useState(true)
  
  const [ techAtual, setTech ] = useState<ITech | null>(null)

  const update = () => {
    async function loadUser() {
      const usertoken = localStorage.getItem('userToken')
      
      if (usertoken) {
        try{
          Api.defaults.headers.authorization = `Bearer ${usertoken}`;

        const { data } = await Api.get<IUser>('/profile')
        setUser(data)
        
        } catch (error){
          console.log(error)
        }
      }
      setLoading(false)
    }
    loadUser();
  }

  useEffect(() => {

      update()
  }, [])

  const notify_error = (message: string) => toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notify_success = (message: string) => toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <AuthContext.Provider value={{ checkUser, setUser, loading, techAtual, setTech, notify_success, notify_error, update }}>
      {children}
    </AuthContext.Provider>
  )
};

