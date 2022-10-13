import { Route, Routes } from "react-router-dom";
import { Login } from '../pages/Home';
import { Register } from '../pages/register';
import { HomePage } from '../pages/Dashboard';

export const Rotas = () => (

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>  
      <Route path='/home/:id' element={<HomePage/>}/>

    </Routes>
)

    
