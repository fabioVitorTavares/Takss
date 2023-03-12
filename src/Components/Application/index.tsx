import { Schedule } from '../Schedule'
import { TypeTheme } from '../Types/types'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../Routes'
import './style.css'
import { Menu } from '../Menu'

export function Application() {  
  
  const theme = useContext<TypeTheme>(ThemeContext)
  const [date, setDate] = useState<Date>(new Date())
  


  return (
    <div
      className='application'
      style={{ backgroundColor: `var(${theme.backgroundColor})`}}
    >
      <Menu
        date={date}
        setDate={setDate}
      />
      <Schedule
        date={date}
        setDate={setDate}
      />
    </div>    
  )
}