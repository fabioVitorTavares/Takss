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
        <div>
          <span>Perfil</span>
          <Link to='/'>
            <button>
              Logout
            </button>
          </Link>
        </div>
      </header>
      <Schedule/>
    </div>    
  )
}