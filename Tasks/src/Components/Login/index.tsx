import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'






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
    if (user == '' && password == '') {
      navigate('/application')      
    }
    else {
      console.log('Err password');
    }    
  }


  const login = (
    <div className='login'>
      <h2>
        Tasks Management
      </h2>
      <div className='divInput'>
        <FaUser/>
        <input
          className='inputUser input'
          type="text"
          placeholder='User'
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className='divInput'>
        <FaLock/>
        <input
          className='inputPassword input'
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button
        onClick={userLogin}
      >
        Enter
      </button>

      <button
        onClick={()=> navigate('/register')}
      >
        Register
      </button>
    </div>
  )

  return (
    <div className='home'>
      {login}
    </div>
  )
}
