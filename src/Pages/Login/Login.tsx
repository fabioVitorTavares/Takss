import { useContext } from "react";
import { ThemeContext } from "../../Context/Theme";
import { useNavigate } from "react-router-dom";
export function Login() {

  const navigate = useNavigate();
  const { theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={() => navigate('/')} >home</button>
      <h2>{theme}</h2>
      <button onClick={()=> setTheme((oldValue:string) => oldValue === 'light' ? 'dark' : 'light')}>Theme</button>
    </div>
  );
}
