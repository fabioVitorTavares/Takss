import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import './style.css'
import { TThemeProps } from '../Types/types'




export function Theme({dark, setDark}: TThemeProps) {
    

  const func = () => {
    setDark(!dark)
    console.log(dark);
  }
  

  return (    
    <div
      className="theme"
      onClick={func}
    >
      {dark ? <BsSun /> : <BsMoon />}
    </div>
  )
}