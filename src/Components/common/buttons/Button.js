import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"
export default function Button({children,active,linkto}) {
  return (
    <Link to={linkto} >
        <div className={`main-button ${active ? 'active' : 'non-active'}`}>
            {children}
        </div>
    </Link>
  )
}