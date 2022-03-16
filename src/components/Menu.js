import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/menu.css'

function Menu() {
  return (
    <div className='menuContainer'>
        <div>
            <h4>Group J</h4>
        </div>
        <NavLink
            to='/dashboard'
            activeClassName='is-active'
            className='nav-link'
        >
            Dashboard
        </NavLink>
        <NavLink
            to='/profile'
            activeClassName='is-active'
            className='nav-link'
        >
            profile
        </NavLink>
        <NavLink
            to='/past-papers'
            activeClassName='is-active'
            className='nav-link'
        >
            Past Papers
        </NavLink>

    </div>
  )
}

export default Menu