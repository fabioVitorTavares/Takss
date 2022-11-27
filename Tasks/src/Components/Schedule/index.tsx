import { useState } from 'react'
import { Calendar } from '../Calendar'
import { Task } from '../Task'
import './style.css'





export function Schedule() {
  const [date, setDate] = useState<Date>(new Date())
  
  const nextDay = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()+1))
  }
  
  const dayPrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()-1))
  }

  document.addEventListener('keydown', (key) => {
    key.key == 'ArrowRight' && nextDay();
    key.key == 'ArrowLeft' && dayPrevious();
  })
  
  return (
    <div className='schedule'>
      <Calendar date={date} setDate={setDate} />
      <Task/>     
    </div>
  )
}
