import { Schedule } from '../Schedule'
import { Link } from 'react-router-dom'
import './style.css'
import { TTheme } from '../Types/types'
import { useState } from 'react'

export function Application({dark} : TTheme) {  
  



  const [openDropdown, setOpenDropdown] = useState<Boolean>(false)
  const [animationClose, setAnimationClose] = useState<Boolean>(false)
  
  console.log(openDropdown, animationClose);
  const closeDropdown = () => {
    openDropdown && setAnimationClose(true)
    setTimeout(() => {
      setOpenDropdown(!openDropdown)      
    }, 1000);
  }

  addEventListener('click', () => closeDropdown())

  const reader = (
    <header className='header'>
      <div>
        <span>
          Tasks
        </span>
      </div>
      <div
        className='profileDropDow'
        onClick={(e) => {
            e.stopPropagation()
            openDropdown ? closeDropdown() : (setOpenDropdown(true), setAnimationClose(false))  
          }
        }
      >
        {openDropdown &&
          <div className='contentProfileDropDow'>
            <button
              onClick={e => e.stopPropagation()}
              className='btnDropDow btnDropDow1'
              style={
                (openDropdown && animationClose) ? { animation: 'closeDropDowAnimationBtn1 1s ease forwards' } :
                openDropdown  ? {animation: 'openDropDowAnimationBtn1 0.25s ease forwards' } : {}
              }
            >
              a
            </button>
            <button
              onClick={e => e.stopPropagation()}
              className='btnDropDow btnDropDow2'
              style={
                (openDropdown && animationClose) ? { animation: 'closeDropDowAnimationBtn2 0.75s ease forwards' } :
                openDropdown  ? {animation: 'openDropDowAnimationBtn2 0.5s ease forwards' } : {}
              }
            >
              b
            </button>
            <button
              onClick={e => e.stopPropagation()}
              className='btnDropDow btnDropDow3'
              style={
                (openDropdown && animationClose) ? { animation: 'closeDropDowAnimationBtn3 0.5s ease forwards' } :
                openDropdown  ? {animation: 'openDropDowAnimationBtn3 0.75s ease forwards'} : {}
              }
            >
              c
            </button>
            <Link to='/'>
              <button
                className='btnDropDow btnDropDow4'
                style={
                  (openDropdown && animationClose) ? { animation: 'closeDropDowAnimationBtn4 0.25s ease forwards' } :
                  openDropdown  ? {animation: 'openDropDowAnimationBtn4 1s ease forwards' } : {}
                }
              >
                Logout
              </button>
            </Link>
          </div>
        }
      </div>
    </header>
  )
  return (
    <div
      className='application'
      style={dark ?
        { backgroundColor : 'var(--background--dark)' } :
        { backgroundColor: 'var(--background--ligth)' } 
    }
    >
      {reader}
      <Schedule/>
    </div>    
  )
}