import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../helpers/utillities'

function Profile() {

  const { meta } = useOutletContext()
  return (
    <>
      <h4>Account Settings</h4>

      <p>First Name :  <b>{titleCase(meta.firstName)}</b></p>
      <p>Last Name :  <b>{titleCase(meta.lastName)}</b></p>
    </>
  )
}

export default Profile