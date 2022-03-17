import React from 'react'
import '../styles/navbar.css'

import { auth } from '../helpers/firebaseConfig'
import { signOut } from 'firebase/auth'

function Navbar() {
  return (
    <div className='navbar-style'>
        <div>CK</div>
        <p style={{marginBottom: '0'}}>Charles Kasasira</p>
        <p style={{marginBottom: '0'}}
          onClick={() => signOut(auth)}
        >Log Out</p>
    </div>
  )
}

export default Navbar