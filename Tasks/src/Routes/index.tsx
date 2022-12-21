import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Home } from '../Components/Home';


export function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Application/>} path='/application'/>      
        <Route element={<Home/>} path='/'/>      
      </Routes>
    </BrowserRouter>
  )
}

