import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assests/logos/Logo1.png"
import Button from '../buttons/Button'
import "./Nav.css"
import TextSliderMain from '../../core/Home/TextSliderMain'
function Nav() {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <Link  to="/">
          {/* COMPY<span>EDGE</span> */}
          <img src={Logo} alt='logo'/>
        </Link>
      </div>
      <TextSliderMain/>
      <div className='LoginSignUp'>
        <Button active={true} linkto={'/login'}>Login</Button>
        <Button active={false} linkto={'/signup'}>Sign Up</Button>

      </div>
    </div>
  )
}

export default Nav