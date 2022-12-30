import { useEffect, useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { MinCalendar } from '../MinCalendar'
import { TDate } from '../Types/types'
import './style.css'



export function Calendar({ date, setDate }: TDate) {
  
  const minCalendar = (
    <MinCalendar
      date={date}
      setDate={setDate}
    />
  )
  
  return (
    <div
      className='calendar'
      onClick={e => e.stopPropagation()}
    >
      {minCalendar}      
      <div className='arrowCalendar'>
        <AiOutlineCaretRight/>
      </div>
    </div>
  )
}