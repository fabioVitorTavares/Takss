import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Login } from '../Components/Login';
import { Home } from '../Components/Home';
import { Register } from '../Components/Register';
import { Theme } from '../Components/Theme';
import { createContext, useState } from 'react';
import { TypeTheme } from '../Components/Types/types';

export const ThemeContext = createContext<TypeTheme | null>(null)


export function Routers() {
  
  const [theme, setTheme] = useState<TypeTheme>({
    dark: true,
    color: '--black',
    backgroundColor: '--background--ligth'
  })

   
  function changeTheme(){
    console.log('alter');
    setTheme({...theme, dark: !theme.dark})
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

