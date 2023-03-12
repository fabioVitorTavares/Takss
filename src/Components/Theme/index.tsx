import { BsSun, BsMoon } from 'react-icons/bs'
import { TypeTheme } from '../Types/types'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../Routes'
import './style.css'



export function Theme({changeTheme} : { changeTheme: Function }) {
  
  const theme = useContext<TypeTheme>(ThemeContext)

  const btnSun = (
    <BsSun
      style={{ fill: '#e7e40c' }}
    />
  )

  const btnMoon = (
    <BsMoon
      style={{ fill: '#10028f' }}
    />
  )

  return (      
    <div
      className="theme"
      onClick={() => changeTheme()}
    >
      {theme?.dark ? btnSun : btnMoon }    
    </div>
  )
}

