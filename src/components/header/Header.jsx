import { NavLink } from 'react-router-dom';
import './header.css';
import React, { useEffect, useState } from 'react';

function Header() {
  const [showModel, setShowModel] = useState(false);
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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className='header'>
      {/* زر القائمة للهواتف */}
      <button onClick={() => setShowModel(true)} className='icon-menu' />
      <div></div>

      {/* القوائم العادية */}
      <nav>
        <ul className='nav-list'>
          <li>
            <NavLink to="/hero" className='nav-item'>About</NavLink>
          </li>
          {/* <li><NavLink to="/articles" className='nav-item'>Articles</NavLink></li> */}
          <li>
            <NavLink to="/projects" className='nav-item'>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className='nav-item'>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='nav-item'>Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* زر تغيير الثيم */}
      <button onClick={toggleTheme} className='mode'>
        {theme === 'dark' ? (<span className='icon-moon-o'></span>) : (<span className='icon-sun'></span>)}
      </button>

      {/* المودال للهاتف */}
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className='icon-close' onClick={() => setShowModel(false)} />
            </li>

            <li>
              <NavLink to="/hero" className='nav-item' onClick={() => setShowModel(false)}>About</NavLink>
            </li>
            {/* <li><NavLink to="/articles" className='nav-item' onClick={() => setShowModel(false)}>Articles</NavLink></li> */}
            <li>
              <NavLink to="/projects" className='nav-item' onClick={() => setShowModel(false)}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className='nav-item' onClick={() => setShowModel(false)}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav-item' onClick={() => setShowModel(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header;
