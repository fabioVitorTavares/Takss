import { useEffect, useState } from 'react'

import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import { TDate } from '../Types/types'
import './style.css'


const numeros = new Array<string>(42).fill('1')
const months = [
  ["January", "Janeiro"],
  ["February", "Fevereiro"],
  ["March", "Março"],
  ["April", "Abril"],
  ["May", "Maio"],
  ["June", "Junho"],
  ["July", "Julho"],
  ["August", "Agosto"],
  ["September", "Setembro"],
  ["October", "Outubro"],
  ["November", "Novembro"],
  ["December", "Dezembro"]]

  const days = [
    ["S", "D"],
    ["M", "S"],
    ["T", "T"],
    ["W", "Q"],
    ["T", "Q"],
    ["F", "S"],
    ["S", "S"]    
  ]

export function Calendar({ date, setDate }: TDate) {
  
  const [numbersOfDays, setNumberOfDays] = useState<string[]>(numeros)

  useEffect(() => {
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
    const positionDay = date.getDay()
    const rest = date.getDate() % 7 
    const positionDayOne = positionDay + (7-rest) +1 < 7 ? positionDay + (7-rest) +1  : positionDay + (7-rest) +1 - 7 

    const newNumberOfDays = Array<string>(42).fill('')
    for (let i = positionDayOne; i < positionDayOne + daysOfMonth; i++) {
      newNumberOfDays[i] = String(i+1-positionDayOne)
    }
    
    setNumberOfDays(newNumberOfDays)
  }, [date])

  const monthPrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth()-1, 1))
  }

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth()+1, 1))
  }

  const nextYear = () => {
    setDate(new Date(date.getFullYear()+1, date.getMonth(), 1))
  }

  const yearPrevious = () => {
    setDate(new Date(date.getFullYear()-1, date.getMonth(), 1))
  }



  return (
    <div className='calendar'>
      <div className='minCalendar'>
        <div className='monthYearWeek'>
          <div className='monthYear'>
            <span className='selectMonth'>
              <AiOutlineCaretLeft onClick={monthPrevious} className='selectors'/>
                {months[date.getMonth()][0]}
              <AiOutlineCaretRight onClick={nextMonth} className='selectors'/>
            </span>
            <span className='selectYear'>
              <AiOutlineCaretLeft onClick={yearPrevious} className='selectors'/>          
                {date.getFullYear()}
              <AiOutlineCaretRight onClick={nextYear} className='selectors'/>          
            </span>
          </div>
          <div className='week'>
            {days.map(day => <span key={Math.random()}>{day[0]}</span>)} 
          </div>
        </div>
        
        <div className='numbers'> 
          {numbersOfDays.map(day =>
            <span
              className={day != "" ? 'numbersSpan' : ''}
              key={Math.random()}
              style={day == String(date.getDate()) ? { backgroundColor: '#0821ad'}:{}  }
              onClick={() => day != "" && setDate((new Date(date.getFullYear(), date.getMonth(), Number(day))))}>              
              {day}
            </span>)}
        </div>
      </div>
      <div>
        <span> { date.toLocaleDateString() }</span>
      </div>
    </div>
  )
}