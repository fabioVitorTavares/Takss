import { useContext } from "react"
import { ThemeContext } from "../../Routes"

export function Teste() {

  const theme = useContext(ThemeContext)
  
  return (
    <h1>
      {`${theme?.dark}`}
    </h1>
  )
}