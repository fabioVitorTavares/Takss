import { Schedule } from '../Schedule'
import { Link } from 'react-router-dom'
import './style.css'
import { TConfigs } from '../Types/types'



export function Application({theme, language} : TConfigs) {  
  
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