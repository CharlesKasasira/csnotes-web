import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { GiPapers } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'

import { menuItem } from '../helpers/menuData'

import '../styles/menu.css'

function Menu() {
  return (
    <div className='menuContainer'>
        <div className='logo'>
            <h4>Group J</h4>
        </div>

        {menuItem.map(item => (
            <NavLink
            to={item.link}
            activeClassName='is-active'
            className='nav-link'
        >
            {item.icon}
            {item.label}
        </NavLink>
        ))}

    </div>
  )
}

export default Menu