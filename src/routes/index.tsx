import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from '../pages/Home';
import { Register } from '../pages/register';
import { Dashboard } from '../pages/Dashboard';
import { TechnologyModal } from "../components/technologyModal";
import { TechModal } from "../components/technologyModal/TechModal";
import { UserProvider } from "../contexts/UserContext";

export const Rotas = () => (
  <UserProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>  
      
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='new' element={<TechnologyModal/>}/> 
        <Route path='tech' element={<TechModal/>}/> 

      </Route>
      <Route path='*' element={<Navigate to={'/'}/>}/>
    </Routes>
  </UserProvider>  
    )
    
    
