import { useState } from 'react';
import { Schedule } from '../Schedule';
import './style.css'



export function App() {  
  
  return (
    <div className='app'>
       <header className='header'>
        <div>
          <span>Tasks</span>
        </div>
        <span>Perfil</span>
      </header>
      <Schedule/>
    </div>    
  )
}