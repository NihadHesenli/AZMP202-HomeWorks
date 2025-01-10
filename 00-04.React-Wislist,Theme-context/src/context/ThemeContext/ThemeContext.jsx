/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import  { createContext, useState } from 'react'
export const ThemeContext = createContext(null)


const ThemeProvider = ({children}) => {

    const [them, setThem] = useState("light")

    const toggleTheme = ()=>{
        setThem((prevTheme)=>prevTheme === "light" ? "dark" : "light")
    }
  return (
    <ThemeContext.Provider value={{them, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider