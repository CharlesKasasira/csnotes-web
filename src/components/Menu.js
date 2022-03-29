import { NavLink } from 'react-router-dom'

import { menuItem } from '../helpers/menuData'
import { Navigate } from 'react-router-dom'

import '../styles/menu.css'

function Menu() {
  return (
    <div className='menuContainer'>
        <div className='logo'>
            <h4>Group J</h4>
        </div>

        {menuItem.map((item, index) => (
            <NavLink
            key={index}
            to={item.link}
            activeClassName='is-active'
            className='nav-link'
            onClick={() => <Navigate to={'/dashboard'} />}
        >
            {item.icon}
            {item.label}
        </NavLink>
        ))}

    </div>
  )
}

export default Menu