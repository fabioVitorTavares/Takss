import { Children, createContext, useState } from "react";
import {  ThemeContextProps, TypeJsxElement } from "../Types/Types";
import {useNavigate} from  'react-router-dom'


export const ThemeContext = createContext<ThemeContextProps>({theme:'', setTheme:()=>{}});

export function Theme({children}: TypeJsxElement) {
  
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}