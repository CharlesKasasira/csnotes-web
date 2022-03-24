import './MobileMenu.css'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'

import { menuItem } from '../../helpers/menuData'

import { NavLink } from 'react-router-dom'

function MobileMenu({meta}) {

  const [ hide, setHide ] = useState(true)
  
  return (
    <div >
     <div className='mobile-menu'>
       {hide
       ?
       <span
       className='text-xl burger'
       onClick={() => {
         setHide(!hide)
       }}
     ><MdMenu /></span>
       :
       <span
       className='text-xl burger'
       onClick={() => {
         setHide(!hide)
       }}
     >x</span>
       }
        <h1>{meta.firstName}</h1>
     </div>
        

        <div className={`nav-pop ${hide ? 'hide' : ''}`}>
          <div className='inner'>
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
        </div>
    </div>
  )
}

export default MobileMenu