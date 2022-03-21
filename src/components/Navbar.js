import React from 'react'
import { IoMdPower } from 'react-icons/io'
import '../styles/navbar.css'

import { auth } from '../helpers/firebaseConfig'
import { signOut } from 'firebase/auth'
import { titleCase } from '../helpers/utillities'

import DefaultAvatar from './DefaultAvatar/DefaultAvatar'

function Navbar({meta}) {

  return (
    <div className='navbar-style'>
        <p style={{marginBottom: '0'}}>{titleCase(meta.firstName)} {titleCase(meta.lastName)}</p>
        <DefaultAvatar firstName={meta.firstName} lastName={meta.lastName}/>
        <p style={{marginBottom: '0'}}
          onClick={() => signOut(auth)}
          className='logout-icon'
        ><IoMdPower /></p>

        
    </div>
  )
}

export default Navbar