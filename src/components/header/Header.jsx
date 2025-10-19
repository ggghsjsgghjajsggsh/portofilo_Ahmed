
import './header.css'
import React, { use, useEffect, useState } from 'react'

function Header() {
  // const [showModel, setShowModel] = React.useState(false)
  const [showModel, setShowModel] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? 'dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [theme]);





  return (
    <header className='header'>
      <button onClick={() => setShowModel(true)} className='icon-menu'/>
      <div></div>
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'><a href='#hero'>About</a></li>
          <li className='nav-item'><a href='#Articles'>Articles</a></li>
          <li className='nav-item'><a href='#Projects'>Projects</a></li>
          <li className='nav-item'><a href='#Skills'>Skills</a></li>
          <li className='nav-item'><a href='#Contact'>Contact</a></li>
        </ul>
      </nav>

      <button onClick={()=>{
        localStorage.setItem("currentMode", theme === 'dark' ? 'light' : 'dark');
        setTheme(localStorage.getItem("currentMode"))


      }} className='mode'>
        {theme === 'dark' ? (<span className='icon-moon-o'></span>) :
         (<span className='icon-sun'></span>)}
      </button>


    {      /* <button className='menu'>show model</button>} */
    
    showModel &&(

        <div className="fixed">
          <ul className="model">
           <li>
            <button className='icon-close' onClick={() => setShowModel(false)}/>
              
           
            </li>
            <li className='nav-item'><a href='#hero'>About</a></li>
            <li className='nav-item'><a href='#Articles'>Articles</a></li>
            <li className='nav-item'><a href='#Projects'>Projects</a></li>
          <li className='nav-item'><a href='#Skills'>Skills</a></li>
          <li className='nav-item'><a href='#Users'>Users</a></li>
        </ul>
        

      </div>
    )
    
    }

    </header>
  )
}

export default Header