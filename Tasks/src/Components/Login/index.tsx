import { FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { KeyboardEvent, useState } from 'react'
import './style.css'
import { TTheme } from '../Types/types'






export function Login({dark} : TTheme) {
  
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()



  
  const userLogin = () => {
    if (user == 'fabio.furtado' && password == '321') {
      navigate('/application')      
    }
    else {
      console.log('Err password');
    }    
  }

  const keyEnter = (e: KeyboardEvent) => {
    e.keyCode == 13 && userLogin()
  }

  

  const login = (
    <div
      onKeyDown={keyEnter}
      className='login'
      style={dark ?
        { backgroundColor : 'var(--background--dark)' } :
        { backgroundColor: 'var(--background--ligth)' } 
      }
    >  
      <div className='inputsLogin'>
        <div className='divInput'>
          <FaUser/>
          <input
            className='inputUser input'
            type='text'
            placeholder='User'
            onChange={(e) => setUser(e.target.value)}
            />
        </div>
        <div className='divInput'>
          <FaLock/>
          <input
            className='inputPassword input'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>  
      </div>
      <div className='btnsLogin'>
        <button
          className='btnEnterLogin'
          onClick={userLogin}
        >
          Enter
        </button>
        <button
          className='btnRegisterLogin'
          onClick={()=> navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  )

  


  return (
    <div
      className='home'
      style={dark ?
        { backgroundColor : 'var(--background--dark)' } :
        { backgroundColor: 'var(--background--ligth)' } 
      }
    >
      {login}
    </div>
  )
}
