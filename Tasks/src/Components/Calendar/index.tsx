import { useEffect, useState } from 'react'
import { MinCalendar } from '../MinCalendar'
import { TDate } from '../Types/types'
import './style.css'

const daysOfWeek = [
  ['Domingo','Sunday'],
  ['Segunda','Monday'],
  ['Terça','Tuesday'],
  ['Quarta','Wednesday'],
  ['Quinta','Thursday'],
  ['Sexta','Friday'],
  ['Sábado','Sarturday'],
]

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
    >
      {minCalendar}
      <div className='titleCalendar'>
        <h1>{daysOfWeek[date.getDay()][0]}</h1>
        <span className='currentDate'>
          {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}