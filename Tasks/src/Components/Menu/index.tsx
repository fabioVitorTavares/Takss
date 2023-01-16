import { MinCalendar } from '../MinCalendar'
import { TDateSetings } from '../Types/types'
import { useNavigate } from 'react-router-dom'
import { RiLogoutCircleLine } from 'react-icons/ri'
import './style.css'

export function Menu({date, setDate}: TDateSetings) {
  
  const navigate = useNavigate()

  return (    
    <section
      className='menu'
    >      
      <MinCalendar date={date} setDate={setDate} />
      <RiLogoutCircleLine
        className='btn-logout'
        onClick={() => navigate('/')}
      />        
    </section>    
  )
}