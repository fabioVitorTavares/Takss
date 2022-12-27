import { useRef, useState } from 'react'
import { GrConfigure } from 'react-icons/gr'
import { BsSun, BsMoon } from 'react-icons/bs'
import iconBr from './img/icon-br.png'
import iconEg from './img/icon-eg.png'
import './style.css'


export function Configuration() {

  const selectorTheme = useRef(null)
  const selectorLanguage = useRef(null)
  const refIconBr = useRef(null)
  const refIconEg = useRef(null)
  
  const [open, setOpen] = useState<Boolean>(false)
  const [theme, setTheme] = useState<String>('light')
  const [language, setLanguage] = useState<String>('br')
  
  const setThemeDark = () => {
    if (selectorTheme.current) {
      const selector: HTMLSpanElement = selectorTheme.current
      selector.style.animation = 'moveRight 1s ease forwards' 
    }
    setTheme('dark')
  }

  const setThemeLigth = () => {
    if (selectorTheme.current) {
      const selector: HTMLSpanElement = selectorTheme.current
      selector.style.animation = 'moveLeft 1s ease forwards' 
    }
    setTheme('light')
  }

  const setLanguageBr = () => {
    if (selectorLanguage.current) {
      const selector: HTMLSpanElement = selectorLanguage.current
      selector.style.animation = 'moveLeftLanguage 1s ease forwards' 
    }

    if (refIconEg.current) {
      const selector: HTMLSpanElement = refIconEg.current
      selector.style.opacity = '0.7' 
    }

    if (refIconBr.current) {
      const selector: HTMLSpanElement = refIconBr.current
      selector.style.opacity = '1' 
    }
    
    setLanguage('br')
  }

  const setLanguageEg = () => {
    if (selectorLanguage.current) {
      const selector: HTMLSpanElement = selectorLanguage.current
      selector.style.animation = 'moveRightLanguage 1s ease forwards' 
    }

    if (refIconEg.current) {
      const selector: HTMLSpanElement = refIconEg.current
      selector.style.opacity = '1' 
    }

    if (refIconBr.current) {
      const selector: HTMLSpanElement = refIconBr.current
      selector.style.opacity = '0.7' 
    }
    setLanguage('eg')
  }    

  const eventClick =  (e) => {     
    console.log(e);
  }

  const panel = (
    <div className='panel'
      onClick={(e) => eventClick(e)}
    >
     
      <div className='themeSelect'>
        <BsSun
          className='sun'
          onClick={setThemeLigth}
        />
        <BsMoon
          className='moon'          
          onClick={setThemeDark}
        />
        <span
          ref={selectorTheme}
          className='selectorTheme'          
        />
      </div>
      
      <div className='languageSelect'>
        <img 
          src={iconBr} 
          alt="icone bandeira Brazil" 
          className='iconBr'
          onClick={setLanguageBr}
          ref={refIconBr}
          />
        <img 
          src={iconEg} 
          alt="incone bandeira EUA" 
          className='iconEg'
          onClick={setLanguageEg}
          ref={refIconEg}
        />
        <span
          ref={selectorLanguage}
          className='selectorLanguage'          
        />
      </div>
    </div>
  )

  return (
    <div className="configuration">
      <GrConfigure
        onClick={() => setOpen(!open)}
      />
      {open && panel}
    </div>
  )
}