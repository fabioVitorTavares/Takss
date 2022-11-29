import { useEffect, useState } from 'react'
import { MinCalendar } from '../MinCalendar'
import { TDate } from '../Types/types'
import './style.css'


export function Calendar({ date, setDate }: TDate) {
  
  
  return (
    <div className='calendar'>
      <MinCalendar date={date} setDate={setDate} />
      <div>
        <span> { date.toLocaleDateString() }</span>
      </div>
    </div>
  )
}