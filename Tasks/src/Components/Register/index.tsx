import './style.css'
import { useNavigate } from 'react-router-dom'


export function Register() {
  
  const navigate = useNavigate()

  const inputCompleteName = (
    <input
      className='inputUserName'
      type="text"
      placeholder='Complete name'
    />
  )

  const inputEmail = (
    <input
      className='inputUserEmail'
      type="email"
      placeholder='E-mail'
    />
  )

  const inputUserName = (
    <input
      className='inputUser'
      type="text"
      placeholder='User name'
    />
  )

  const inputPassword = (
    <input
      className='inputPassword'
      type="password"
      placeholder='Password'
    />
  )

  const inputConfirmPassword = (
    <input
      className='inputConfirmPassword'
      type="password"
      placeholder='Confirm password'
    />
  )

  const btnCancel = (
    <button
      onClick={()=> navigate('/')}
    >
      Cancel
    </button>
  )

  const btnRegister = (
    <button
      onClick={()=> navigate('/')}
      >
      Register
    </button>
  )

  return (

    <div className='register'>
      {inputCompleteName}
      {inputEmail}
      {inputUserName}
      {inputPassword}
      {inputConfirmPassword}
      <div>
        {btnCancel}
        {btnRegister}
      </div>
    </div>
  )
}