import './style.css'
import { useNavigate } from 'react-router-dom'


export function Home() {
  
  const navigate = useNavigate()

  const borderBtnAnimation = (
    <svg
      className='borderBtnAnimation'
    >
      <polyline
        className='bg-line'
        points='-1,-115 0,0 75,0 75,40 0,40 0,0'
      />
      
    </svg>
  )

  const btnLogin = (
    <button
      className='btnLogin btn'
      onClick={() => navigate('/login')}
    >
      Login
      {borderBtnAnimation}
    </button>
  )


  const btnRegister = (
    <button
      className='btnRegister btn'      
      onClick={()=> navigate('/register')}
    >
      Register
      {borderBtnAnimation}      
    </button>
  )

  return (
    <div className='home'>
      <h1>Home page</h1>
      {btnLogin}
      {btnRegister}      
    </div>    
  )
}
