import { createContext, useEffect, useState } from "react";
import { Api } from "../Api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [usuario, setUser] = useState('')

  const [ loading, setLoading ] = useState(true)

  const navigate = useNavigate()
  
  const [ techAtual, setTech ] = useState('')

  const verification = () => {
    async function loadUser() {
      const usertoken = localStorage.getItem('userToken')
      
      if (usertoken) {
        try{
          Api.defaults.headers.authorization = `Bearer ${usertoken}`;

        const { data } = await Api.get('/profile')
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
    verification()
  }, [])

  const loginUser = (data) => {
    Api.post("/sessions", {
      email: data.email,
      password: data.password,
    })
    .then((resp) => {
      localStorage.setItem("userToken", resp.data.token);
      Api.defaults.headers.authorization = `Bearer ${resp.data.token}`;
      setUser(resp.data.user);
      navigate(`/dashboard`, { replace: true });
        
      })
      .catch((err) => notify_error());
  };

  const registerUser = (data) => {

    Api.post('/users', {
      "email": data.email,
      "password": data.password,
      "name": data.name,
      "bio": data.bio,
      "contact": data.contact,
      "course_module": data.course_module
    })
      .then(function (response) {
        notify_success()

        setTimeout(() => {
          navigate('/')
        }, 5000);
      })
      .catch(function (error) {
        notify_error()
      });
  }


  const notify_error = (message) => toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notify_success = (message) => toast.success(message, {
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
    <AuthContext.Provider value={{ loginUser, registerUser, usuario, loading, verification, setUser, techAtual, setTech, notify_success, notify_error }}>
      {children}
    </AuthContext.Provider>
  )
};