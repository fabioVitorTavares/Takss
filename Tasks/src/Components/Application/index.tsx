import { Schedule } from '../Schedule'
import { Link } from 'react-router-dom'
import './style.css'
import { TConfigs } from '../Types/types'



export function Application({theme, language} : TConfigs) {  
  

  const t = language == 'pt' ? 0 : 1
  const texts = {
    tag: ['Tarefas', 'Tasks'],
    logout: ['Sair', 'Logout']
  }

  const reader = (
    <header className='header'>
      <div>
        <span>{texts.tag[t]}</span>
      </div>
      <div className='profileDropDow'>
        <div className='contentProfileDropDow'>
          <button>b</button>
          <button>b</button>
          <button>b</button>
          <Link to='/'>
            <button>
              {texts.logout[t]}
            </button>            
          </Link>
        </div>
      </div>
    </header>
  )
  return (
    <div className='application'>
      {reader}
      <Schedule/>
    </div>    
  )
}