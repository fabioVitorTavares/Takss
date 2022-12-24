import { FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { KeyboardEvent, useState } from 'react'
import './style.css'






export function Login() {
  
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const linkToApplication = (
    <Link
      to='/application'>
      App
    </Link>
  )
  
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
      className='login'>  
      <div className='inputsLogin'>
        <div className='divInput'>
          <FaUser/>
          <input
            className='inputUser input'
            type="text"
            placeholder='Usuário'
            onChange={(e) => setUser(e.target.value)}
            />
        </div>
        <div className='divInput'>
          <FaLock/>
          <input
            className='inputPassword input'
            type="password"
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>  
      </div>
      <div className='btnsLogin'>
        <button
          className='btnEnterLogin'
          onClick={userLogin}
        >
          Entrar
        </button>
        <button
          className='btnRegisterLogin'
          onClick={()=> navigate('/register')}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  )

  


  return (
    <div className='home'>
      {login}
    </div>
  )
}
