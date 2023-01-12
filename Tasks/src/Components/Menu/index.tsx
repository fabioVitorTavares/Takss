import { MinCalendar } from '../MinCalendar'
import { TDateSetings } from '../Types/types'
import { useNavigate } from 'react-router-dom'
import './style.css'

export function Menu({date, setDate}: TDateSetings) {
  
  const navigate = useNavigate()

  return (    
    <section
      className='menu'
    >
      Menu
      <MinCalendar date={date} setDate={setDate} />
      <button
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </section>    
  )
}