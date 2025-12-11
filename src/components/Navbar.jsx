import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
          
          <ul>
          
            <Link to="/"><li>Home</li></Link>
            <Link to="findmore"><li>FindMore</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="join"><li>Join</li></Link>
          </ul>

    </div>
  )
}

export default Navbar
