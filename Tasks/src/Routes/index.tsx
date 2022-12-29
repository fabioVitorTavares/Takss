import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Application } from '../Components/Application';
import { Login } from '../Components/Login';
import { Home } from '../Components/Home';
import { Register } from '../Components/Register';
import { Configuration } from '../Components/Configuration';
import { useState } from 'react';


export function Routers() {
  
  const [theme, setTheme] = useState<String>('light') 
  const [language, setLanguage] = useState<String>('pt') 

  console.log(theme, language);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
          <>
            <Home
              theme={theme}
              language={language}
            /> 
            <Configuration
              theme={theme}
              language={language}
              setTheme={setTheme}
              setLanguage={setLanguage}
            />
          </>
          }
          path='/' />    
        <Route
          element={
            <>
              <Configuration
                theme={theme}
                language={language}
                setTheme={setTheme}
                setLanguage={setLanguage}
            />
              <Login
                theme={theme}
                language={language}
              />
            </>
          }
          path='/login' />      
        <Route
          element={
            <>
              <Configuration
                theme={theme}
                language={language}
                setTheme={setTheme}
                setLanguage={setLanguage}
            />
              <Register
                theme={theme}
                language={language}
              />
            </>
          }
          path='/register' />    
        <Route
          element={
            <>
              <Configuration
                theme={theme}
                language={language}
                setTheme={setTheme}
                setLanguage={setLanguage}
            />
              <Application
                theme={theme}
                language={language}
              />
            </>
          }
          path='/application' />      
      </Routes>
    </BrowserRouter>
  )
}

