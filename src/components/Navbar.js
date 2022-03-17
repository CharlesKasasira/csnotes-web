import React from 'react'
import { IoMdPower } from 'react-icons/io'
import '../styles/navbar.css'

import { auth } from '../helpers/firebaseConfig'
import { signOut } from 'firebase/auth'

function Navbar() {
  return (
    <div className='navbar-style'>
        <p style={{marginBottom: '0'}}>Charles Kasasira</p>
        <p style={{marginBottom: '0'}}
          onClick={() => signOut(auth)}
          className='logout-icon'
        ><IoMdPower /></p>
    </div>
  )
}

export default Navbar