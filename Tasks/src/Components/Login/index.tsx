import { FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { KeyboardEvent, useState } from 'react'
import './style.css'
import { TConfigs } from '../Types/types'






export function Login({theme, language} : TConfigs) {
  
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

  const t = language == 'pt' ? 0 : 1
  const texts = {
    inputUserPlaceholder: ['Usuário', 'User'],
    inputPasswordPlaceholder: ['Senha', 'Password'],
    btnEnterLogin: ['Entrar', 'Login'],
    btnRegisterLogin: ['Cadastre-se', 'Register']
  }

  const login = (
    <div
      onKeyDown={keyEnter}
      className='login'
      style={theme == 'dark' ?
        { backgroundColor: 'var(--background--ligth)' } :
        { backgroundColor : 'var(--background--dark)' }
      }
    >  
      <div className='inputsLogin'>
        <div className='divInput'>
          <FaUser/>
          <input
            className='inputUser input'
            type="text"
            placeholder={texts.inputUserPlaceholder[t]}
            onChange={(e) => setUser(e.target.value)}
            />
        </div>
        <div className='divInput'>
          <FaLock/>
          <input
            className='inputPassword input'
            type="password"
            placeholder={texts.inputPasswordPlaceholder[t]}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>  
      </div>
      <div className='btnsLogin'>
        <button
          className='btnEnterLogin'
          onClick={userLogin}
        >
          {texts.btnEnterLogin[t]}
        </button>
        <button
          className='btnRegisterLogin'
          onClick={()=> navigate('/register')}
        >
          {texts.btnRegisterLogin[t]}
        </button>
      </div>
    </div>
  )

  


  return (
    <div
      className='home'
      style={theme == 'light' ?
        { backgroundColor: 'var(--background--ligth)' } :
        { backgroundColor : 'var(--background--dark)' }
      }
    >
      {login}
    </div>
  )
}
