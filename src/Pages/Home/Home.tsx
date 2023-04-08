import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../../Context/Theme';


export function Home() {

  const navigate = useNavigate()
  const { theme, setTheme} = useContext(ThemeContext);

  return (
    <div>

      <h1> Home page</h1>
      <button onClick={() => navigate('login')}>
        Login
      </button>
      <h2>{theme}</h2>
      <button onClick={()=> setTheme((oldValue:string) => oldValue === 'light' ? 'dark' : 'light')}>Theme</button>
    </div>
  )
}
