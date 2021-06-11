import React, { useState } from 'react'

export default function Layout(props) {
  const [theme, setTheme] = useState('light')

  let handleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  
  return (
    <div className={`${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className='app__wrapper'>
        <button onClick={() => handleTheme()}>change theme</button>
        {props.children}
      </div>
    </div>
  )
}
