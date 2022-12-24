import './style.css'
import { useNavigate } from 'react-router-dom'


export function Register() {
  
  const navigate = useNavigate()

  const inputCompleteName = (
    <input
      className='inputUserName inputRegister'
      type="text"
      placeholder='Nome'
    />
  )

  const inputEmail = (
    <input
      className='inputUserEmail inputRegister'
      type="email"
      placeholder='E-mail'
    />
  )

  const inputUserName = (
    <input
      className='inputUser inputRegister'
      type="text"
      placeholder='Usuário'
    />
  )

  const inputPassword = (
    <input
      className='inputPassword inputRegister'
      type="password"
      placeholder='Senha'
    />
  )

  const inputConfirmPassword = (
    <input
      className='inputConfirmPassword inputRegister'
      type="password"
      placeholder='Confirme a senha'
    />
  )

  const btnCancel = (
    <button
      className='btnRegisterRegister'
      onClick={()=> navigate('/login')}
    >
      Cancelar
    </button>
  )

  const btnRegister = (
    <button
      className='btnRegisterRegister'      
      onClick={()=> navigate('/')}
      >
      Cadastrar
    </button>
  )

  return (

    <div className='register'>
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
}