import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Login } from '../Components/Login';
import { Home } from '../Components/Home';
import { Register } from '../Components/Register';


export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' />    
        <Route element={<Login/>} path='/login'/>      
        <Route element={<Register />} path='/register' />    
        <Route element={<Application/>} path='/application'/>      
      </Routes>
    </BrowserRouter>
  )
}

