import { useState } from 'react'
import '../styles/navbar.css'

import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={logo} />
        <div className='hiddenLinks'>
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        <button onClick={toggleNavbar}>
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar
