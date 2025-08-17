
import './footer.css'
import React from 'react'

function Footer() {
  return (
    <footer className="footer" style={{display:"flex"}}>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">User</a></li>
      </ul>

      <p>© 2023 All rights reserved</p>
    </footer>
  )
}

export default Footer