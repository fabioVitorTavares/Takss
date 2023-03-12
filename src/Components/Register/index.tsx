import './style.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TypeTheme } from '../Types/types'
import { ThemeContext } from '../../Routes'


export function Register() {
  
  const navigate = useNavigate()
  const theme = useContext<TypeTheme>(ThemeContext)

  const inputCompleteName = (
    <input
      className='inputUserName inputRegister'
      type="text"
      placeholder='Name'
    />
  )

  const inputEmail = (
    <input
      className='inputUserEmail inputRegister'
      type="email"
      placeholder= 'Email'
    />
  )

  const inputUserName = (
    <input
      className='inputUser inputRegister'
      type='text'
      placeholder='User'
    />
  )

  const inputPassword = (
    <input
      className='inputPassword inputRegister'
      type='password'
      placeholder = 'Password'
    />
  )

  const inputConfirmPassword = (
    <input
      className='inputConfirmPassword inputRegister'
      type="password"
      placeholder = 'Confirm the Password'
    />
  )

  const btnCancel = (
    <button
      className='btnCancelRegister'
      onClick={()=> navigate('/login')}
    >
      Cancel
    </button>
  )

  const btnRegister = (
    <button
      className='btnRegisterRegister'      
      onClick={()=> navigate('/')}
      >
      Register
    </button>
  )

  const register = (
    <div
      className='register'
      style={{boxShadow: `0.5em 0.5em 0.5em var(${theme.color})`}}
      >
      {inputCompleteName}
      {inputEmail}
      {inputUserName}
      {inputPassword}
      {inputConfirmPassword}
      <div className='btnsRegister'>
        {btnCancel}
        {btnRegister}
      </div>
    </div>
  )

  return (
    <div
      className='home'
      style={{backgroundColor: `var(${theme.backgroundColor})`}}      
    >
    {register}
    </div>
  )
}