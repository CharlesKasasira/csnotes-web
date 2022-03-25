import { useState } from 'react'
import { IoMdPower } from 'react-icons/io'
import { MdSettings } from 'react-icons/md'
import '../styles/navbar.css'

import { useNavigate } from 'react-router-dom'

import { auth } from '../helpers/firebaseConfig'
import { signOut } from 'firebase/auth'
import { titleCase } from '../helpers/utillities'

import DefaultAvatar from './DefaultAvatar/DefaultAvatar'

function Navbar({meta}) {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='navbar-style'>
        <div className='flex items-end relative'
          onClick={() => setShow(!show)}
        >
          <DefaultAvatar firstName={meta.firstName} lastName={meta.lastName}/>
          <p className='mb-0 cursor-pointer'>{titleCase(meta.firstName)} {titleCase(meta.lastName)}</p>

          <div className={show ? 'absolute px-3 py-3 shadow-sm w-full bg-white top-12 z-10' : 'hidden'}>
          <p style={{marginBottom: '0'}}
            onClick={() => navigate('/settings')}
            className='flex cursor-pointer justify-center items-center hover:bg-gray-100 p-2'
          >
            <span className='mr-1 '>
              <MdSettings />
            </span>
            Settings
          </p>
          <p style={{marginBottom: '0'}}
            onClick={() => signOut(auth)}
            className='flex cursor-pointer justify-center items-center hover:bg-gray-100 p-2'
          >
            <span className='mr-1 '>
              <IoMdPower />
            </span>
            Logout
          </p>
        </div>
        </div>

        
    </div>
  )
}

export default Navbar