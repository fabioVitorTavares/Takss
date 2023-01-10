import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Login } from '../Components/Login';
import { Home } from '../Components/Home';
import { Register } from '../Components/Register';
import { Theme } from '../Components/Theme';
import { useState } from 'react';


export function Routers() {

  const [dark, setDark] = useState<Boolean>(false)

  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Home
                dark={dark}
              />
              <Theme
                dark={dark}
                setDark={setDark}
              />
            </>
          }
          path='/' />
        <Route
          element={
            <>
              <Theme
                dark={dark}
                setDark={setDark}
              />
              <Login
                dark={dark}
              />
            </>
          }
          path='/login' />
        <Route
          element={
            <>
              <Theme
                dark={dark}
                setDark={setDark}
              />
              <Register
                dark={dark}
              />
            </>
          }
          path='/register' />
        <Route
          element={
            <>
              <Theme
                dark={dark}
                setDark={setDark}
              />
              <Application
                dark={dark}
              />
            </>
          }
          path='/application' />
      </Routes>
    </BrowserRouter>
  )
}

