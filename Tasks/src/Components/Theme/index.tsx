import { BsSun, BsMoon } from 'react-icons/bs'
import { TThemeProps, TypeTheme } from '../Types/types'
import { useContext, useEffect, useState } from 'react'
import './style.css'
import { createContext } from 'react'
import { Teste } from '../Home/teste'
import { ThemeContext } from '../../Routes'

type Props = {
  changeTheme: Function
}

export function Theme({changeTheme} : Props) {
  
  const theme = useContext(ThemeContext)

  

  return (  
    
    <div
      className="theme"
      onClick={() => changeTheme()}
    >
      
      {theme?.dark ?        
        <BsSun style={{ fill: '#e7e40c' }}/> :
        <BsMoon style={{ fill: '#10028f' }}/>}
    
    </div>
  )
}

