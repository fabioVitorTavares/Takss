import { Schedule } from '../Schedule'
import { Link } from 'react-router-dom'
import './style.css'



export function Application() {  
  
  return (
    <div className='application'>
       <header className='header'>
        <div>
          <span>Tasks</span>
        </div>
        <span>Perfil</span>
        <Link to='/'>Sair</Link>
      </header>
      <Schedule/>
    </div>    
  )
}