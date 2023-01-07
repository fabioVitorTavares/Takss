import './style.css'
import { useNavigate } from 'react-router-dom'
import { TConfigs } from '../Types/types'


export function Register({theme, language} : TConfigs) {
  
  const navigate = useNavigate()


  const t = language == 'pt' ? 0 : 1
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
      placeholder={texts.inputUserName[t]}
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
      placeholder={texts.inputUser[t]}
    />
  )

  const inputPassword = (
    <input
      className='inputPassword inputRegister'
      type="password"
      placeholder= {texts.inputPassword[t]}
    />
  )

  const inputConfirmPassword = (
    <input
      className='inputConfirmPassword inputRegister'
      type="password"
      placeholder={texts.inputConfirmPassword[t]}
    />
  )

  const btnCancel = (
    <button
      className='btnCancelRegister'
      onClick={()=> navigate('/login')}
    >
      {texts.btnCancel[t]}
    </button>
  )

  const btnRegister = (
    <button
      className='btnRegisterRegister'      
      onClick={()=> navigate('/')}
      >
      {texts.btnRegister[t]}
    </button>
  )

  const register = (
    <div
      className='register'
      style={theme == 'dark' ?
        { backgroundColor: 'var(--background--ligth)' } :
        { backgroundColor : 'var(--background--dark)' }
      }
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
      style={theme == 'light' ?
        { backgroundColor: 'var(--background--ligth)' } :
        { backgroundColor : 'var(--background--dark)' }
      }
    >
    {register}
    </div>
  )
}