import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Login } from '../Components/Login';
import { Home } from '../Components/Home';
import { Register } from '../Components/Register';
import { Theme } from '../Components/Theme';
import { createContext, useState } from 'react';
import { TypeTheme } from '../Components/Types/types';

export const ThemeContext = createContext<TypeTheme>({
  dark: false,
  color: '--black',
  backgroundColor: '--background--ligth'
})


export function Routers() {
  
  const [theme, setTheme] = useState<TypeTheme>({
    dark: false,
    color: '--black',
    backgroundColor: '--background--ligth'
  })
   
  const changeTheme = () => {
    const updateTheme = theme.dark ? {
      dark:  false,
      color: '--black',
      backgroundColor: '--background--ligth'
    } : {
      dark: true,
      color: '--white',
      backgroundColor: '--background--dark'
    }    
    setTheme(updateTheme)
  }


  return (
    
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
          <Routes>
            <Route
              element={
                <>
                  <Home/>
                  <Theme changeTheme={changeTheme}/>
                </>
              }
              path='/' />
            <Route
              element={
                <>
                  <Login/>
                  <Theme changeTheme={changeTheme}/>
                </>
              }
              path='/login' />
            <Route
              element={
                <>
                  <Theme changeTheme={changeTheme}/>
                  <Register/>
                </>
              }
              path='/register' />
            <Route
              element={
                <>
                  <Theme changeTheme={changeTheme}/>
                  <Application/>
                </>
              }
              path='/application' />
          </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

