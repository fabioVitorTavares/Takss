import './style.css'
import { useNavigate } from 'react-router-dom'


export function Register() {
  
  const navigate = useNavigate()


  
  const texts = {
    inputUserName: ['Nome', 'Name'],
    inputUser: ['Usuário', 'User'],
    inputPassword: ['Senha', 'Password'],
    inputConfirmPassword: ['Confirme a senha', 'Confirm the Password'],
    btnCancel: ['Cancelar', 'Cancel'],
    btnRegister: ['Cadastrar', 'Register']
  }

  const inputCompleteName = (
    <input
      className='inputUserName inputRegister'
      type="text"
      placeholder={texts.inputUserName[0]}
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
      type="text"
      placeholder={texts.inputUser[0]}
    />
  )

  const inputPassword = (
    <input
      className='inputPassword inputRegister'
      type="password"
      placeholder= {texts.inputPassword[0]}
    />
  )

  const inputConfirmPassword = (
    <input
      className='inputConfirmPassword inputRegister'
      type="password"
      placeholder={texts.inputConfirmPassword[0]}
    />
  )

  const btnCancel = (
    <button
      className='btnCancelRegister'
      onClick={()=> navigate('/login')}
    >
      {texts.btnCancel[0]}
    </button>
  )

  const btnRegister = (
    <button
      className='btnRegisterRegister'      
      onClick={()=> navigate('/')}
      >
      {texts.btnRegister[0]}
    </button>
  )

  const register = (
    <div
      className='register'
      
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
      
    >
    {register}
    </div>
  )
}