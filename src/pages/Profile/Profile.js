import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../../helpers/utillities'
import {   AiFillEdit } from 'react-icons/ai'
import DefaultAvatar from '../../components/DefaultAvatar/DefaultAvatar'

import './style.css'

function Profile() {

  const { meta, person } = useOutletContext()

  return (
    <div className='bg-white w-full h-full p-2 rounded-md mb-3 lg:mt-3 md:mt-3'>
      <h4 className='font-bold m-1 mb-3'>Account Settings</h4>

      <div className='editContainer'>
        <DefaultAvatar firstName={meta.firstName} lastName={meta.lastName} />
        <span className='editIcon'
          onClick={() => console.log('clicked')}
        ><AiFillEdit /></span>
      </div>

      <div className='flex flex-col gap-2'>
        <p>First Name :  <b>{titleCase(meta.firstName)}</b></p>
        <p>Last Name :  <b>{titleCase(meta.lastName)}</b></p>
        <p>Email :  <b>{titleCase(person.email)}</b></p>
      </div>
    </div>
  )
}

export default Profile