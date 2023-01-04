import React, { createContext, useState } from 'react'



export const ThemeContext = createContext();

const ThemeProvider = (props) => {

  const [isDark, setIsDark] = useState(false);

  const dark = {
    navCol: '#a78bfa',
    main: '#1e293b',
    secondary: '#0f172a',
    textCol: 'white'
  }
  
  const light = {
    navCol: '#c4b5fd',
    main: '#f1f5f9',
    secondary: '#94a3b8',
    textCol: 'black'
  }
  

  return (
    <ThemeContext.Provider value={{isDark, setIsDark, dark, light}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider